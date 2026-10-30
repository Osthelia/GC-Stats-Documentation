---
sidebar_position: 5
title: Webhooks
slug: /api/webhooks
---

# Webhooks

Plutôt que d'interroger l'API en boucle, une [clé partenaire](/api/api-keys#clés-partenaires-et-clés-publiques) peut enregistrer des endpoints HTTPS : GC Stats envoie alors un `POST` à chacun d'eux quand un match, un tournoi, une équipe ou un joueur change.

:::note
Les webhooks sont réservés aux **clés partenaires**. Les [clés publiques](/api/public-keys) n'y ont pas accès.
:::

## Gérer les endpoints

Les endpoints se gèrent depuis la page **Webhooks** du Dashboard :

- pour une clé personnelle : **Clés API → Webhooks** (`/dashboard/api-keys/webhooks`) ;
- pour une clé d'organisation : **Développeur → Webhooks** dans la barre latérale de cette organisation (`/dashboard/{organizationId}/webhooks`). Il vous faut la permission **Gérer les clés API**.

Si vous avez plusieurs clés partenaires, choisissez-en une avec le sélecteur en haut de la page. Chaque clé peut avoir jusqu'à **10 endpoints**. Pour chaque endpoint, vous pouvez :

- le **modifier** : URL, description, événements et filtres ;
- l'**activer / désactiver** avec l'interrupteur ;
- **envoyer un test** — envoie immédiatement un [`ping`](#ping-de-test) et affiche le statut HTTP que vous avez répondu ;
- **afficher le secret** / **nouveau secret** — révéler le [secret de signature](#vérifier-les-signatures), ou le remplacer (l'ancien cesse de fonctionner immédiatement) ;
- le **supprimer**, avec son historique de livraisons.

Sous les endpoints, **Livraisons récentes** liste les 30 dernières livraisons de la clé (date, événement, endpoint, statut, tentatives), avec un bouton **Renvoyer** sur chacune.

:::warning
Si la clé API elle-même est désactivée, tous ses endpoints de webhook sont **supprimés**, et aucun ne peut être ajouté tant qu'elle n'est pas réactivée.
:::

### URL de l'endpoint

L'URL doit :

- utiliser `https://` ;
- pointer vers une adresse publique — `localhost`, les adresses privées, de loopback et link-local (et les noms d'hôte comme `*.local`, `*.internal`, `*.lan`) sont refusés. L'adresse est revérifiée à chaque envoi, donc un nom d'hôte qui résout plus tard vers une adresse privée est refusé lui aussi ;
- ne contenir ni nom d'utilisateur ni mot de passe ;
- faire au plus 500 caractères.

Les redirections ne sont pas suivies : répondez depuis l'URL elle-même.

## Événements

| Événement | Envoyé quand |
|---|---|
| `match.created` | Un match est créé |
| `match.updated` | Un match change, y compris le score ou le statut de l'une de ses maps |
| `tournament.created` | Un tournoi est créé |
| `tournament.updated` | Un tournoi change |
| `team.updated` | Une équipe change |
| `player.updated` | Un joueur change |

Choisissez au moins un événement par endpoint.

Les changements sont collectés et envoyés environ **toutes les minutes**. Plusieurs changements d'une même entité dans cet intervalle sont fusionnés en une seule livraison, et le payload contient toujours l'entité **telle qu'elle est au moment où la livraison est mise en file**, pas un diff. Les entités masquées ou supprimées ne sont jamais envoyées.

L'ordre d'arrivée des livraisons n'est pas garanti : fiez-vous à `occurred_at` et aux données elles-mêmes plutôt qu'à l'ordre de réception.

## Filtres

Un filtre vide laisse tout passer. Tous les filtres définis doivent correspondre.

| Filtre | Valeurs | S'applique à |
|---|---|---|
| **Régions** | Jusqu'à 20 régions de tournoi | Événements de match et de tournoi uniquement (un match prend la région de son tournoi) |
| **Officiel** | Officiels et non officiels / Officiels uniquement / Non officiels uniquement | Événements de match et de tournoi uniquement |
| **Équipes** | Jusqu'à 50 équipes | Tous les événements : matchs où joue l'une de ces équipes, tournois auxquels elles participent, ces équipes elles-mêmes, et joueurs dont l'équipe actuelle en fait partie |

Un match sans tournoi n'a ni région ni statut officiel : il est exclu dès qu'un filtre de région, ou un filtre officiel autre que *Officiels et non officiels*, est défini.

## Requête

Chaque livraison est un `POST` avec un corps JSON et ces en-têtes :

| En-tête | Valeur |
|---|---|
| `Content-Type` | `application/json` |
| `User-Agent` | `GCStats-Webhook/1.0` |
| `X-GCS-Event` | L'événement, ex. `match.updated` |
| `X-GCS-Delivery` | L'id de la livraison. Il reste le même quand une livraison est retentée ou renvoyée : utilisez-le pour ignorer les doublons |
| `X-GCS-Timestamp` | Heure Unix de la tentative, en secondes |
| `X-GCS-Signature` | `sha256=` suivi de la [signature](#vérifier-les-signatures) en hexadécimal |

### Payload

```json
{
  "event": "match.updated",
  "event_id": 18342,
  "occurred_at": "2026-10-30T18:42:07.000Z",
  "region": "EMEA",
  "official": true,
  "data": {
    "id": 5521,
    "scheduled_at": "2026-10-30T18:00:00.000Z",
    "status": "live",
    "tournament_id": 412,
    "tournament_name": "…",
    "team_a_id": 87,
    "team_a_name": "…",
    "score_a": 1,
    "score_b": 0,
    "team_b_id": 93,
    "team_b_name": "…",
    "…": "…"
  }
}
```

| Champ | Description |
|---|---|
| `event` | Le type d'événement |
| `event_id` | Id du changement qui a déclenché la livraison |
| `occurred_at` | Moment où le changement a été enregistré (ISO 8601) |
| `region` | Région du tournoi, `null` s'il n'y en a pas. Événements de match et de tournoi uniquement |
| `official` | Si le tournoi est officiel, `null` si inconnu. Événements de match et de tournoi uniquement |
| `data` | L'entité, avec les mêmes champs que le dataset OpenData correspondant (`matches`, `tournaments`, `teams` ou `players`) |

### Ping de test

**Envoyer un test** poste un événement `ping`, signé comme n'importe quelle livraison :

```json
{
  "event": "ping",
  "occurred_at": "2026-10-30T18:42:07.000Z",
  "data": { "webhook_id": 12, "message": "GC Stats webhook test" }
}
```

Un test échoué n'est pas retenté et ne compte jamais pour la [désactivation de l'endpoint](#nouvelles-tentatives-et-désactivation-automatique).

## Vérifier les signatures

Chaque endpoint a son propre secret de signature (`whsec_…`), affiché une fois à la création de l'endpoint puis disponible avec **Afficher le secret**. La signature est le **HMAC-SHA256**, avec le secret entier comme clé, de :

```text
<X-GCS-Timestamp>.<corps brut de la requête>
```

Pour vérifier une livraison :

1. Calculez le HMAC sur le corps **brut**, tel que reçu — pas sur un JSON re-sérialisé.
2. Comparez-le à l'en-tête `X-GCS-Signature` (après `sha256=`) avec une comparaison à temps constant.
3. Rejetez les livraisons dont le timestamp est trop ancien (par exemple plus de 5 minutes) pour bloquer les rejeux.

```js title="Node.js"
import crypto from "node:crypto";

function verify(secret, headers, rawBody) {
  const timestamp = headers["x-gcs-timestamp"];
  const expected = "sha256=" + crypto.createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");
  const received = headers["x-gcs-signature"] ?? "";
  const fresh = Math.abs(Date.now() / 1000 - Number(timestamp)) < 300;
  return fresh && received.length === expected.length && crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
}
```

```python title="Python"
import hashlib, hmac, time

def verify(secret: str, headers, raw_body: bytes) -> bool:
    timestamp = headers["X-GCS-Timestamp"]
    expected = "sha256=" + hmac.new(secret.encode(), f"{timestamp}.".encode() + raw_body, hashlib.sha256).hexdigest()
    fresh = abs(time.time() - int(timestamp)) < 300
    return fresh and hmac.compare_digest(headers.get("X-GCS-Signature", ""), expected)
```

## Répondre

Répondez avec n'importe quel statut **2xx** en moins de **10 secondes**. Tout le reste — un autre statut, un timeout, une erreur de connexion — est un échec. Le corps de la réponse est ignoré.

Accusez réception rapidement et faites le travail lourd ensuite (dans une file, par exemple) pour rester sous le délai.

## Nouvelles tentatives et désactivation automatique

Une livraison échouée est retentée avec un délai croissant : après 1 minute, 5 minutes, 30 minutes, 2 heures, puis 6 heures. Après ces 6 tentatives (environ 9 heures au total), elle est marquée **Échouée** définitivement. Vous pouvez toujours la **Renvoyer** à la main depuis la liste des livraisons ; un renvoi manuel ne modifie pas le calendrier de tentatives d'une livraison encore en attente.

Après **20 tentatives échouées d'affilée**, l'endpoint est désactivé automatiquement, et le Dashboard l'indique. Corrigez l'endpoint, puis réactivez-le avec l'interrupteur : cela remet le compteur d'échecs à zéro.

L'historique des livraisons est conservé 30 jours.
