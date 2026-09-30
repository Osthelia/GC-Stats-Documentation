---
sidebar_position: 3
title: API keys
slug: /api/api-keys
---

# API keys

API keys are managed from the Dashboard, but scoped like the rest of the API: a key belongs either to **you personally** or to an **organization** you belong to. Organization keys are shared with anyone in that org who has the right permission; personal keys are yours alone.

You need the **Manage API keys** permission to use the Dashboard's API keys page fully. Without it, the page stays read-only with a notice explaining why.

## Overview

The page shows four stats (active keys, requests this month, average response time, error rate) plus a table of your keys: client name, a masked preview of the key, its rate limit, its request count, and whether it's active.

:::note
You can't create keys yourself from the Dashboard — they're provisioned by GC Stats administrators. The Dashboard lets you **view**, **regenerate**, and **track usage** of your existing keys.
:::

## What you can do here

- **Stats** — open a key's detail page
- **Regenerate** — after confirming, shows the new key in plain text exactly once, in a dialog with a copy button and a security warning. Copy it immediately; you won't be able to see it again.

## Key detail page

- Key name and active status
- Request volume over the last 24 hours / 7 days / 30 days
- Latency: min, p50, p95, p99, max
- A daily chart of requests and errors
- A breakdown table by endpoint

See [Authentication](/api/authentication) for using your key to integrate with GC Stats.
