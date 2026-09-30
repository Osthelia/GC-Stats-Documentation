---
sidebar_position: 3
title: Members
---

# Members

:::info
**Members** is your organization's public credit list — everyone you want credited as part of the organization. It does **not** grant anyone the ability to log in. For that, see [Access](/dashboard/access).
:::

This page lists current and past members as cards, each showing:

- their name and country flag
- their title (Owner, Caster, Journalist, Graphic designer, Manager, and any other organizational title — this is a flexible, free-text field, so your organization can use whatever fits its production team)
- their start and end dates

A member's title here is unrelated to a Dashboard permission role — the same word (e.g. "Caster") can mean different things on the two pages, unless you explicitly link them (see below).

## What you can do here

- **Add a member** — pick an existing person or create a new one ("New person")
- **Edit** a member's title or dates directly from their card
- **Remove** a person from the list
- **Link or unlink a user account** to a person, using the "Linked account" row on their card, so that person can then be granted [Dashboard access](/dashboard/access)
- **Edit a person's public profile** (name, country, pronouns, VLR ID, Liquipedia link, aliases) via the "Edit profile" dialog

## Automatically granting access from a member's title

Owners can optionally set up rules (in [Roles & permissions](/dashboard/roles-permissions)) so that adding someone to the member list with a specific title also grants them a matching Dashboard role — but this is off by default and entirely opt-in.

## Permissions

| Action | Permission required |
|---|---|
| Manage members (add/edit/remove) | Manage staff (`organization.staff.manage`) |
| Create a new person | Create people (`organization.people.create`) |
| Link/unlink a user account | Link people to accounts (`organization.people.linkUser`) |
| Edit a person's public profile | Edit people profiles (`organization.people.editProfile`) |
