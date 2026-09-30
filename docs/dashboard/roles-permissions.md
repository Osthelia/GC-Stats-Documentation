---
sidebar_position: 5
title: Roles & permissions
---

# Roles & permissions

:::note
This page is only visible to **owners**. If you're not an owner, you'll be redirected to the [Overview](/dashboard/overview) page.
:::

## How it works

- Every account with [access](/dashboard/access) to your organization has either the **Owner** status, or one or more **custom roles**.
- **Owner** is a fixed status you can't edit — it grants every permission up to the ceiling your organization was given by a GC Stats administrator. Only an owner can grant, change, or revoke another owner's access or roles, which prevents a custom role from escalating itself to Owner.
- **Custom roles** are fully self-service: owners create them and toggle individual permissions on or off, grouped by category (profile, members, news, streams, credits, API keys, and so on), up to your organization's permission ceiling.
- An account can hold several custom roles at once — its effective permissions are the **union** of every role it's been given (capped by the ceiling, or unrestricted for an owner).

## Managing roles

The "Role manager" panel lets you:

- create, rename, or delete a custom role;
- toggle each permission on or off for that role.

The "Owner" tab is shown for reference but can't be edited.

## Linking member titles to Dashboard roles

The "Member-role links" panel optionally connects a [member](/dashboard/members) title to a Dashboard role. For example, you could set it up so that anyone whose member title is "Caster" and whose account is linked automatically receives the "Caster" Dashboard role. This is an opt-in convenience, not a second permission system — it's off by default.

## Permission reference

| Permission | What it controls |
|---|---|
| Edit organization profile | Edit the organization's profile |
| Upload/manage logos | Manage logos |
| Manage staff | Manage [Members](/dashboard/members) and production credits |
| Create people | Create a new person |
| Link people to accounts | Link/unlink a user account to a person |
| Edit people profiles | Edit a person's public profile |
| Manage access | Manage non-owner [Access](/dashboard/access) |
| View / manage media | View, upload, or delete media (e.g. photos) |
| View news | View [news](/dashboard/news) articles |
| Edit news | Create articles, and edit draft or changes requested articles |
| Edit published news | Edit an article that's already published |
| Review news | Approve or request changes on a submitted article |
| Publish news | Publish an approved article (immediately or scheduled), unpublish it, and feature it or show it on the homepage |
| Delete news | Archive, unarchive, or permanently delete articles |
| View / edit / delete / link streams | View, edit, delete, or link [stream channels](/dashboard/streams-and-vods) |
| Link VODs | Add, edit, or remove [VODs](/dashboard/streams-and-vods) |
| Manage API keys | View [API keys](/api/api-keys) and their usage stats |

## The author permission

Access to the [Author space](/dashboard/author-space) is an individual permission, entirely separate from an organization's role system — an account can have it whether or not it belongs to any organization.
