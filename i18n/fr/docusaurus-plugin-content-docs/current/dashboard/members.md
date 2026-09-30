---
sidebar_position: 3
title: Membres
---

# Membres

:::info
**Membres** est la liste de crédits publique de votre organisation — tous ceux que vous souhaitez créditer comme faisant partie de l'organisation. Cela ne donne **pas** la possibilité de se connecter à qui que ce soit. Pour cela, voir [Accès](/dashboard/access).
:::

Cette page liste les membres actuels et passés sous forme de cartes, chacune affichant :

- leur nom et le drapeau de leur pays
- leur titre (Owner, Caster, Journaliste, Graphiste, Manager, et tout autre titre organisationnel — c'est un champ libre et flexible, votre organisation peut donc utiliser ce qui convient à son équipe de production)
- leurs dates de début et de fin

Le titre d'un membre ici n'a aucun rapport avec un rôle de permission du Dashboard — le même mot (ex. « Caster ») peut signifier des choses différentes sur les deux pages, à moins de les relier explicitement (voir ci-dessous).

## Ce que vous pouvez faire ici

- **Ajouter un membre** — choisir une personne existante ou en créer une nouvelle (« Nouvelle personne »)
- **Modifier** le titre ou les dates d'un membre directement depuis sa carte
- **Retirer** une personne de la liste
- **Lier ou délier un compte utilisateur** à une personne, via la ligne « Compte lié » sur sa carte, afin que cette personne puisse ensuite recevoir l'[accès au Dashboard](/dashboard/access)
- **Modifier le profil public d'une personne** (nom, pays, pronoms, ID VLR, lien Liquipedia, alias) via la boîte de dialogue « Modifier le profil »

## Accorder automatiquement l'accès à partir du titre d'un membre

Les owners peuvent optionnellement configurer des règles (dans [Rôles et permissions](/dashboard/roles-permissions)) pour que le fait d'ajouter quelqu'un à la liste des membres avec un titre spécifique lui accorde également un rôle Dashboard correspondant — mais ceci est désactivé par défaut et entièrement optionnel.

## Permissions

| Action | Permission requise |
|---|---|
| Gérer les membres (ajouter/modifier/retirer) | Gérer le staff (`organization.staff.manage`) |
| Créer une nouvelle personne | Créer des personnes (`organization.people.create`) |
| Lier/délier un compte utilisateur | Lier des personnes aux comptes (`organization.people.linkUser`) |
| Modifier le profil public d'une personne | Modifier les profils des personnes (`organization.people.editProfile`) |
