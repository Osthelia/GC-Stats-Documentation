---
sidebar_position: 1
title: Prise en main
---

# Le Dashboard

Le Dashboard est l'endroit où l'équipe de production de votre organisation — casters, journalistes, graphistes, managers, et toute personne travaillant sur votre contenu — gère tout ce que GC Stats sait de vous : votre profil public, vos membres, qui peut se connecter et avec quel rôle, vos articles d'actualité, les crédits de production, ainsi que les chaînes de stream et les VODs.

Les clés API sont également gérées depuis le Dashboard, mais elles sont documentées avec le reste de l'API — voir [Clés API](/api/api-keys) — car une clé est rattachée à un utilisateur ou à une organisation plutôt qu'à une section particulière du Dashboard.

:::info
Le Dashboard est différent de l'administration interne du site GC Stats, qui est réservée à l'équipe GC Stats et n'est pas couverte ici.
:::

## Obtenir l'accès

Pour ouvrir le Dashboard, vous devez être connecté et remplir au moins l'une de ces conditions :

- vous avez reçu l'**accès au Dashboard** d'au moins une organisation, ou
- vous avez reçu la permission individuelle **auteur**, qui vous donne uniquement accès à l'[Espace auteur](/dashboard/author-space).

Si aucune de ces conditions ne s'applique à vous, vous serez renvoyé vers le site public. Si vous pensez que vous devriez avoir accès, demandez à un owner de votre organisation de vous l'accorder (voir [Accès](/dashboard/access)).

Lorsque vous accédez à `/dashboard` :

- si votre compte n'a accès qu'à une seule organisation (et pas de permission auteur), vous arrivez directement sur le Dashboard de cette organisation ;
- si votre compte n'a que la permission auteur (aucun accès à une organisation), vous arrivez sur l'[Espace auteur](/dashboard/author-space) ;
- sinon, vous verrez un sélecteur listant toutes les organisations auxquelles vous avez accès, ainsi qu'une tuile « Espace auteur » si cela s'applique aussi à vous.

## Changer d'organisation

Si vous avez accès à plusieurs organisations, un sélecteur d'organisation est toujours disponible dans l'en-tête. Il liste toutes les organisations auxquelles vous avez accès, ainsi que l'Espace auteur le cas échéant, et vous permet de passer de l'une à l'autre à tout moment. Tant que vous n'en avez pas choisi une, la barre latérale vous invitera simplement à en sélectionner une.

## La barre latérale

La barre latérale n'affiche que les sections que vous avez réellement la permission d'utiliser sur l'organisation actuellement sélectionnée — tout ce que vous ne pouvez pas toucher est entièrement masqué, groupe compris.

| Groupe | Sections |
|---|---|
| — | [Aperçu](/dashboard/overview) |
| Organisation | [Profil](/dashboard/profile), [Membres](/dashboard/members), [Accès](/dashboard/access), [Rôles et permissions](/dashboard/roles-permissions) *(owners uniquement)* |
| Contenu | [Actualités](/dashboard/news), [Crédits de production](/dashboard/credits) |
| Diffusion | [Chaînes de stream et VODs](/dashboard/streams-and-vods) |
| Développeur | [Clés API](/api/api-keys) |

## La page d'aperçu de l'organisation

Une fois une organisation sélectionnée, sa page d'aperçu affiche son logo et son nom, trois statistiques rapides (combien de personnes ont accès, votre rôle, et combien de permissions vous avez reçues), ainsi que des raccourcis vers Profil, Membres, Crédits de production, Accès, et — pour les owners — Rôles et permissions.

## À lire en premier : Membres vs. Accès

C'est la distinction la plus importante à comprendre avant d'utiliser le Dashboard :

- **[Membres](/dashboard/members)** est votre liste de crédits publique (qui caste, qui écrit, qui fait le design, qui manage, etc.). Ajouter quelqu'un ici ne lui permet **pas** de se connecter.
- **[Accès](/dashboard/access)** est la liste des comptes qui peuvent réellement **se connecter** au Dashboard de votre organisation, et avec quel rôle.

Les deux sont volontairement séparés. Vous pouvez optionnellement les relier entre eux — voir [Membres](/dashboard/members) et [Rôles et permissions](/dashboard/roles-permissions).
