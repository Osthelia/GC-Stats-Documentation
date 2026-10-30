---
sidebar_position: 4
title: Public keys
slug: /api/public-keys
---

# Public keys

Any GC Stats account can create a free **public key** in a few seconds, without waiting for the GC Stats team. It gives access to the same `/api/v1` routes as a [partner key](/api/api-keys#partner-and-public-keys), with a few limits.

## Creating a key

1. Sign in, then open **Settings → API** (`/settings/api`).
2. Fill in:
   - **Product or company** — who will use the data (2 to 80 characters);
   - **Usage description** — what the data is used for, which endpoints, and roughly how often (20 to 1,000 characters).
3. Click **Create the key**.

The key is shown **once**: copy it before closing the message. Send it in the `x-api-key` header like any other key (see [Authentication](/api/authentication)).

Your API key is subject to the same terms of use as the site.

## Limits

- **Rate limit** — public keys are limited to **15 requests per second per account** by default, shared by all your public keys. Creating more keys doesn't raise it. This limit can change at any time, without notice; the current value is shown on the settings page.
- **Number of keys** — up to **3** active public keys per account by default. A suspended key still takes a slot.
- **No webhooks** — [webhooks](/api/webhooks) are reserved for partner keys.

For a stable limit and webhooks, request a partner key from the GC Stats team (on Discord or by email).

## Managing your keys

The **Your public keys** list on the same page shows, for each key: its name, a masked preview, its creation date, its number of requests over the last 30 days, and its status:

- **Active** — the key works. You can **Revoke** it at any time; it stops working immediately and frees its slot.
- **Revoked** — the key no longer works.
- **Suspended** — the GC Stats team suspended the key. It answers `403`, still takes a slot, and you can't revoke it yourself: contact the team on Discord to request its reinstatement.

Public keys can't be regenerated: revoke the key and create a new one instead.

Your public keys also appear in the Dashboard's [API keys](/api/api-keys) page, with a **Public** badge, so you can open their usage stats.

## When the API refuses a public key

| Status | Cause |
|---|---|
| `403` | The key is suspended, or public keys are disabled for everyone |
| `429` | The per-second limit of your account is exceeded. The response carries `Retry-After: 1` |

If your account's API access is blocked by the GC Stats team, all your public keys are revoked and you can't create new ones.
