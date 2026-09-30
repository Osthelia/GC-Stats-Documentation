---
sidebar_position: 1
title: Getting started
---

# The Dashboard

The Dashboard is where your organization's production team — casters, journalists, graphic designers, managers, and everyone else who works on your content — manages everything GC Stats knows about you: your public profile, your members, who can log in and with what role, your news articles, production credits, and stream channels and VODs.

API keys are also managed from the Dashboard, but they're documented alongside the rest of the API — see [API keys](/api/api-keys) — since a key is scoped to a user or an organization rather than to any one Dashboard section.

:::info
The Dashboard is different from GC Stats' internal site administration, which is reserved for the GC Stats team and isn't covered here.
:::

## Getting access

To open the Dashboard, you need to be logged in and meet at least one of these conditions:

- you've been granted **Dashboard access** to at least one organization, or
- you've been granted the individual **author** permission, which gives you access to the [Author space](/dashboard/author-space) only.

If neither applies to you, you'll be sent back to the public site. If you believe you should have access, ask an owner of your organization to grant it (see [Access](/dashboard/access)).

When you go to `/dashboard`:

- if your account only has access to one organization (and no author permission), you land directly on that organization's Dashboard;
- if your account only has the author permission (no organization access), you land on the [Author space](/dashboard/author-space);
- otherwise, you'll see a picker listing every organization you can access, plus an "Author space" tile if that applies to you too.

## Switching organizations

If you have access to more than one organization, an organization switcher is always available in the header. It lists every organization you can access, plus the Author space if applicable, and lets you jump between them at any time. Until you pick one, the sidebar will just prompt you to choose.

## The sidebar

The sidebar only shows sections you actually have permission to use on the currently selected organization — anything you can't touch is hidden entirely, group and all.

| Group | Sections |
|---|---|
| — | [Overview](/dashboard/overview) |
| Organization | [Profile](/dashboard/profile), [Members](/dashboard/members), [Access](/dashboard/access), [Roles & permissions](/dashboard/roles-permissions) *(owners only)* |
| Content | [News](/dashboard/news), [Production credits](/dashboard/credits) |
| Broadcast | [Stream channels & VODs](/dashboard/streams-and-vods) |
| Developer | [API keys](/api/api-keys) |

## The organization overview page

Once you pick an organization, its overview page shows its logo and name, three quick stats (how many people have access, your role, and how many permissions you've been granted), plus shortcuts to Profile, Members, Production credits, Access, and — for owners — Roles & permissions.

## Read this first: Members vs. Access

This is the single most important distinction to understand before using the Dashboard:

- **[Members](/dashboard/members)** is your public credit list (who casts, who writes, who designs, who manages, and so on). Adding someone there does **not** let them log in.
- **[Access](/dashboard/access)** is the list of accounts that can actually **log in** to your organization's Dashboard, and with which role.

The two are intentionally separate. You can optionally link them together — see [Members](/dashboard/members) and [Roles & permissions](/dashboard/roles-permissions).
