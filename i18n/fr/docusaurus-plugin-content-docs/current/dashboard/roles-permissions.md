---
sidebar_position: 5
title: Rôles et permissions
---

# Rôles et permissions

:::note
Cette page n'est visible que par les **owners**. Si vous n'êtes pas owner, vous serez redirigé vers la page [Aperçu](/dashboard/overview).
:::

## Comment ça marche

- Chaque compte ayant [accès](/dashboard/access) à votre organisation a soit le statut **Owner**, soit un ou plusieurs **rôles personnalisés**.
- **Owner** est un statut fixe que vous ne pouvez pas modifier — il accorde toutes les permissions jusqu'au plafond attribué à votre organisation par un administrateur GC Stats. Seul un owner peut accorder, modifier ou révoquer l'accès ou les rôles d'un autre owner, ce qui empêche un rôle personnalisé de s'auto-élever au statut Owner.
- Les **rôles personnalisés** sont entièrement en libre-service : les owners les créent et activent ou désactivent des permissions individuelles, regroupées par catégorie (profil, membres, actualités, streams, crédits, clés API, etc.), jusqu'au plafond de permissions de votre organisation.
- Un compte peut détenir plusieurs rôles personnalisés à la fois — ses permissions effectives sont l'**union** de tous les rôles qui lui ont été attribués (plafonnées par le plafond, ou illimitées pour un owner).

## Gérer les rôles

Le panneau « Gestionnaire de rôles » vous permet de :

- créer, renommer ou supprimer un rôle personnalisé ;
- activer ou désactiver chaque permission pour ce rôle.

L'onglet « Owner » est affiché à titre de référence mais ne peut pas être modifié.

## Lier les titres de membre aux rôles du Dashboard

Le panneau « Liaisons titre-rôle » relie optionnellement un titre de [membre](/dashboard/members) à un rôle du Dashboard. Par exemple, vous pourriez configurer que toute personne dont le titre de membre est « Caster » et dont le compte est lié reçoive automatiquement le rôle Dashboard « Caster ». C'est une commodité optionnelle, pas un second système de permissions — elle est désactivée par défaut.

## Référence des permissions

| Permission | Ce qu'elle contrôle |
|---|---|
| Modifier le profil de l'organisation | Modifier le profil de l'organisation |
| Téléverser/gérer les logos | Gérer les logos |
| Gérer le staff | Gérer les [Membres](/dashboard/members) et les crédits de production |
| Créer des personnes | Créer une nouvelle personne |
| Lier des personnes aux comptes | Lier/délier un compte utilisateur à une personne |
| Modifier les profils des personnes | Modifier le profil public d'une personne |
| Gérer l'accès | Gérer l'[Accès](/dashboard/access) non-owner |
| Voir / gérer les médias | Voir, téléverser ou supprimer des médias (ex. photos) |
| Voir les actualités | Voir les articles d'[actualités](/dashboard/news) |
| Modifier les actualités | Créer des articles, et modifier les articles en brouillon ou avec modifications demandées |
| Modifier les actualités publiées | Modifier un article déjà publié |
| Réviser les actualités | Approuver ou demander des modifications sur un article soumis |
| Publier les actualités | Publier un article approuvé (immédiatement ou de façon programmée), le dépublier, et le mettre en avant ou l'afficher sur la page d'accueil |
| Supprimer les actualités | Archiver, désarchiver, ou supprimer définitivement des articles |
| Voir / modifier / supprimer / lier les streams | Voir, modifier, supprimer ou lier des [chaînes de stream](/dashboard/streams-and-vods) |
| Lier les VODs | Ajouter, modifier ou supprimer des [VODs](/dashboard/streams-and-vods) |
| Gérer les clés API | Voir les [clés API](/api/api-keys) et leurs statistiques d'utilisation |

## La permission auteur

L'accès à l'[Espace auteur](/dashboard/author-space) est une permission individuelle, entièrement séparée du système de rôles d'une organisation — un compte peut la posséder qu'il appartienne ou non à une organisation.
