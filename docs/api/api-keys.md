---
sidebar_position: 3
title: API keys
slug: /api/api-keys
---

# API keys

API keys are managed from the Dashboard, but scoped like the rest of the API: a key belongs either to **you personally** or to an **organization** you belong to. Organization keys are shared with anyone in that org who has the right permission; personal keys are yours alone.

## Partner and public keys

| | Partner key | Public key |
|---|---|---|
| Issued by | GC Stats administrators | You, from [your account settings](/api/public-keys) |
| Owner | You or an organization | You |
| Rate limit | Its own, per minute | Shared by all your public keys, per second |
| [Webhooks](/api/webhooks) | Yes | No |
| Regenerate | Yes, from the Dashboard | No — revoke it and create a new one |

Both kinds use the same `x-api-key` header and reach the same routes.

## The Dashboard page

You need the **Manage API keys** permission to use the Dashboard's API keys page fully. Without it, the page stays read-only with a notice explaining why.

### Overview

The page shows four stats (active keys, requests this month, average response time, error rate) plus a table of your keys: client name, a masked preview of the key, its rate limit, its request count, and whether it's active. Public keys carry a **Public** badge, and their rate limit reads *Shared public limit*.

:::note
You can't create partner keys yourself — they're provisioned by GC Stats administrators. [Public keys](/api/public-keys) are created from your account settings, not from the Dashboard. The Dashboard lets you **view**, **regenerate**, and **track usage** of your existing keys.
:::

### What you can do here

- **Stats** — open a key's detail page
- **Regenerate** *(partner keys only)* — after confirming, shows the new key in plain text exactly once, in a dialog with a copy button and a security warning. Copy it immediately; you won't be able to see it again.

### Key detail page

- Key name and active status
- Request volume over the last 24 hours / 7 days / 30 days
- Latency: min, p50, p95, p99, max
- A daily chart of requests and errors
- A breakdown table by endpoint

Webhook endpoints of your partner keys are managed from the Dashboard's **Webhooks** page — see [Webhooks](/api/webhooks).

See [Authentication](/api/authentication) for using your key to integrate with GC Stats.
