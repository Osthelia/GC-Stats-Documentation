---
sidebar_position: 3
title: Clés API
slug: /api/api-keys
---

# Clés API

Les clés API sont gérées depuis le Dashboard, mais rattachées comme le reste de l'API : une clé appartient soit à **vous personnellement**, soit à une **organisation** à laquelle vous appartenez. Les clés d'organisation sont partagées avec toute personne de cette organisation disposant de la permission adéquate ; les clés personnelles n'appartiennent qu'à vous.

## Clés partenaires et clés publiques

| | Clé partenaire | Clé publique |
|---|---|---|
| Émise par | Les administrateurs de GC Stats | Vous, depuis [les paramètres de votre compte](/api/public-keys) |
| Propriétaire | Vous ou une organisation | Vous |
| Limite de débit | La sienne, par minute | Partagée entre toutes vos clés publiques, par seconde |
| [Webhooks](/api/webhooks) | Oui | Non |
| Régénération | Oui, depuis le Dashboard | Non — révoquez-la et créez-en une nouvelle |

Les deux types utilisent le même en-tête `x-api-key` et accèdent aux mêmes routes.

## La page du Dashboard

Vous avez besoin de la permission **Gérer les clés API** pour utiliser pleinement la page des clés API du Dashboard. Sans elle, la page reste en lecture seule avec une notice expliquant pourquoi.

### Aperçu

La page affiche quatre statistiques (clés actives, requêtes ce mois-ci, temps de réponse moyen, taux d'erreur) ainsi qu'un tableau de vos clés : nom du client, aperçu masqué de la clé, sa limite de débit, son nombre de requêtes, et si elle est active. Les clés publiques portent un badge **Publique**, et leur limite de débit indique *Limite publique partagée*.

:::note
Vous ne pouvez pas créer de clés partenaires vous-même — elles sont provisionnées par les administrateurs de GC Stats. Les [clés publiques](/api/public-keys) se créent depuis les paramètres de votre compte, pas depuis le Dashboard. Le Dashboard vous permet de **consulter**, **régénérer** et **suivre l'utilisation** de vos clés existantes.
:::

### Ce que vous pouvez faire ici

- **Statistiques** — ouvrir la page de détail d'une clé
- **Régénérer** *(clés partenaires uniquement)* — après confirmation, affiche la nouvelle clé en clair une seule fois, dans une boîte de dialogue avec un bouton de copie et un avertissement de sécurité. Copiez-la immédiatement ; vous ne pourrez plus la revoir.

### Page de détail d'une clé

- Nom de la clé et statut actif
- Volume de requêtes sur les dernières 24 heures / 7 jours / 30 jours
- Latence : min, p50, p95, p99, max
- Un graphique quotidien des requêtes et des erreurs
- Un tableau de répartition par endpoint

Les endpoints de webhook de vos clés partenaires se gèrent depuis la page **Webhooks** du Dashboard — voir [Webhooks](/api/webhooks).

Consultez [Authentification](/api/authentication) pour utiliser votre clé et intégrer GC Stats.
