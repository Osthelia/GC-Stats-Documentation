---
sidebar_position: 9
title: Actualités
---

# Actualités

Vous avez besoin de la permission **Voir les actualités** pour ouvrir cette page.

## La liste des articles

Un tableau triable et filtrable (recherche par titre ; filtre par statut, langue ou plage de dates) liste les articles de votre organisation, chacun étiqueté avec un statut :

`Brouillon` → `En révision` → `Approuvé` ou `Modifications demandées` → `Publié` → `Archivé`

Pour programmer un article dans le futur, publiez-le avec une date de publication future — il reste caché du site public jusqu'à ce que cette date soit passée, puis il devient visible automatiquement. Il n'existe pas de statut « programmé » séparé ; il apparaît simplement comme Publié avec une date future.

Le bouton « Créer » ainsi que la possibilité de modifier un brouillon ou un article avec modifications demandées nécessitent la permission **Modifier les actualités**. Modifier un article déjà publié nécessite en revanche la permission **Modifier les actualités publiées** (les deux sont indépendantes, un compte peut détenir l'une, l'autre, les deux, ou aucune). Un réviseur disposant de **Réviser les actualités** ou **Publier les actualités**, mais d'aucune des permissions de modification, peut tout de même ouvrir un article pour le réviser ou le publier.

## L'éditeur d'articles

- Éditeur de texte enrichi
- Panneau d'image de couverture
- Sélecteur d'entités liées (équipes, joueurs ou tournois liés à l'article)
- **Actions de statut** et fil de **Conversation** — voir ci-dessous

## Le workflow de révision

Les articles passent par une chaîne d'approbation simple avant d'être publics :

1. Un rédacteur écrit l'article (`Brouillon`) puis, une fois prêt, **le soumet pour révision**.
2. Un réviseur disposant de la permission **Réviser les actualités** l'examine et soit **l'approuve**, soit **demande des modifications** — le renvoyant au rédacteur avec le statut `Modifications demandées`.
3. Une fois approuvé, toute personne disposant de **Publier les actualités** peut le **publier** immédiatement ou le programmer pour une date future.
4. Un article peut ensuite être **archivé** (retiré des listings publics mais conservé pour référence), et — avec **Supprimer les actualités** — supprimé définitivement.

Chaque transition nécessite une permission spécifique : **Modifier les actualités** pour soumettre ou resoumettre, **Réviser les actualités** pour approuver ou demander des modifications, **Publier les actualités** pour publier (ou dépublier) un article approuvé, et **Supprimer les actualités** pour supprimer. Réviser et publier sont des permissions séparées ; une organisation peut avoir un rôle qui révise les articles sans pouvoir les mettre en ligne, et inversement.

Une fois un article publié, modifier de nouveau son contenu (titre, texte, couverture, entités liées) nécessite la permission séparée **Modifier les actualités publiées** plutôt que **Modifier les actualités**.

### Conversation

Chaque article dispose d'un panneau **Conversation** : un fil de commentaires privé qui lui est attaché et qui n'est jamais affiché sur le site public. Il fait aussi office de journal d'audit de révision — chaque soumission, approbation, demande de modification et action de publication y est enregistrée automatiquement, aux côtés de tout commentaire libre que le rédacteur et les réviseurs se laissent (ex. « peux-tu revérifier le score au paragraphe 2 ? »).

### Aperçu avant publication

Toute personne ayant accès à un article peut le visualiser tel qu'il apparaîtra sur la véritable page publique avant qu'il ne soit publié, pour vérifier exactement son rendu une fois en ligne — même mise en page, même style, mêmes liens vers les entités liées, simplement pas encore visible du public.

Voir aussi [Espace auteur](/dashboard/author-space) pour gérer votre profil de signature.
