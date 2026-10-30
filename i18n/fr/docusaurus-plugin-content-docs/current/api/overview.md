---
sidebar_position: 1
title: Aperçu
slug: /api/overview
---

# API GC Stats

L'API GC Stats (`/api/v1`) vous donne un accès en lecture aux données des joueurs et des équipes. Chaque route :

- nécessite une [clé API](/api/authentication) ;
- est soumise à une [limite de débit](/api/authentication#limite-de-débit) par clé ;
- renvoie du JSON, y compris les [erreurs](/api/errors).

Il y a deux façons d'obtenir une clé :

- créer vous-même une [clé publique](/api/public-keys) gratuite depuis les paramètres de votre compte, avec une limite de débit partagée ;
- demander une **clé partenaire** à l'équipe GC Stats, avec une limite de débit stable et les [webhooks](/api/webhooks). Consultez [Clés API](/api/api-keys) pour savoir comment consulter, régénérer et suivre l'utilisation de la vôtre.

Les clés partenaires peuvent aussi recevoir des [webhooks](/api/webhooks) : GC Stats appelle vos endpoints HTTPS quand un match, un tournoi, une équipe ou un joueur change, sans que vous ayez à interroger l'API en boucle.

La référence complète et générée des endpoints — chaque route, paramètre et forme de réponse — se trouve sous **API > Référence** dans la barre latérale, et est maintenue synchronisée avec la spécification OpenAPI de l'API.
