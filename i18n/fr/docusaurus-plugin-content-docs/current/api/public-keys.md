---
sidebar_position: 4
title: Clés publiques
slug: /api/public-keys
---

# Clés publiques

Tout compte GC Stats peut créer gratuitement une **clé publique** en quelques secondes, sans attendre l'équipe GC Stats. Elle donne accès aux mêmes routes `/api/v1` qu'une [clé partenaire](/api/api-keys#clés-partenaires-et-clés-publiques), avec quelques limites.

## Créer une clé

1. Connectez-vous, puis ouvrez **Paramètres → API** (`/settings/api`).
2. Renseignez :
   - **Produit ou entreprise** — qui utilisera les données (2 à 80 caractères) ;
   - **Description de l'usage** — à quoi servent les données, quels endpoints, et à quelle fréquence environ (20 à 1 000 caractères).
3. Cliquez sur **Créer la clé**.

La clé n'est affichée **qu'une fois** : copiez-la avant de fermer le message. Envoyez-la dans l'en-tête `x-api-key` comme n'importe quelle clé (voir [Authentification](/api/authentication)).

Votre clé API est soumise aux mêmes conditions d'utilisation que le site.

## Limites

- **Limite de débit** — les clés publiques sont limitées par défaut à **15 requêtes par seconde par compte**, partagées entre toutes vos clés publiques. Créer plus de clés ne l'augmente pas. Cette limite peut changer à tout moment, sans préavis ; la valeur actuelle est affichée sur la page des paramètres.
- **Nombre de clés** — jusqu'à **3** clés publiques actives par compte par défaut. Une clé suspendue occupe toujours un emplacement.
- **Pas de webhooks** — les [webhooks](/api/webhooks) sont réservés aux clés partenaires.

Pour une limite stable et les webhooks, demandez une clé partenaire à l'équipe GC Stats (sur Discord ou par e-mail).

## Gérer vos clés

La liste **Vos clés publiques** sur la même page affiche, pour chaque clé : son nom, un aperçu masqué, sa date de création, son nombre de requêtes sur les 30 derniers jours, et son statut :

- **Active** — la clé fonctionne. Vous pouvez la **Révoquer** à tout moment ; elle cesse de fonctionner immédiatement et libère son emplacement.
- **Révoquée** — la clé ne fonctionne plus.
- **Suspendue** — l'équipe GC Stats a suspendu la clé. Elle répond `403`, occupe toujours un emplacement, et vous ne pouvez pas la révoquer vous-même : contactez l'équipe sur Discord pour demander sa réactivation.

Les clés publiques ne peuvent pas être régénérées : révoquez la clé et créez-en une nouvelle.

Vos clés publiques apparaissent aussi sur la page [Clés API](/api/api-keys) du Dashboard, avec un badge **Publique**, pour consulter leurs statistiques d'utilisation.

## Quand l'API refuse une clé publique

| Statut | Cause |
|---|---|
| `403` | La clé est suspendue, ou les clés publiques sont désactivées pour tout le monde |
| `429` | La limite par seconde de votre compte est dépassée. La réponse porte `Retry-After: 1` |

Si l'accès à l'API de votre compte est bloqué par l'équipe GC Stats, toutes vos clés publiques sont révoquées et vous ne pouvez plus en créer.
