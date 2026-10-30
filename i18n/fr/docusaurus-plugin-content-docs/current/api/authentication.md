---
sidebar_position: 2
title: Authentification
---

# Authentification

Chaque requête vers `/api/v1/*` doit inclure l'en-tête `x-api-key` :

```http
GET /api/v1/teams/123 HTTP/1.1
Host: gc-stats.app
x-api-key: <votre_clé>
```

```bash
curl https://gc-stats.app/api/v1/teams/123 \
  -H "x-api-key: <votre_clé>"
```

Une clé manquante ou invalide renvoie `401 Unauthorized`. Une clé suspendue renvoie `403 Forbidden`.

Il existe deux types de clés :

- **Clés partenaires** — émises par les administrateurs de GC Stats et rattachées à un utilisateur ou à une organisation, avec leur propre limite de débit et les [webhooks](/api/webhooks). Consultez [Clés API](/api/api-keys) pour suivre l'utilisation d'une clé et la régénérer.
- **Clés publiques** — créées par n'importe qui depuis les paramètres de son compte, avec une limite de débit partagée. Consultez [Clés publiques](/api/public-keys).

## Limite de débit

Les **clés partenaires** ont chacune leur propre limite de requêtes par minute, mesurée sur une fenêtre de 60 secondes. Une limite `null` signifie un nombre de requêtes illimité.

Les **clés publiques** partagent une limite de requêtes par seconde par compte (15 par défaut), quel que soit le nombre de clés publiques que vous possédez. Cette limite peut changer à tout moment.

Certaines routes plus lourdes comptent pour plus d'une requête. Une fois la limite dépassée, l'API répond avec `429 Too Many Requests` jusqu'à ce que la fenêtre avance. La réponse porte un en-tête `Retry-After`, en secondes : `60` pour une clé partenaire, `1` pour une clé publique.
