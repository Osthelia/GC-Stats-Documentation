---
sidebar_position: 2
title: Authentication
---

# Authentication

Every request to `/api/v1/*` must include the `x-api-key` header:

```http
GET /api/v1/teams/123 HTTP/1.1
Host: gc-stats.app
x-api-key: <your_key>
```

```bash
curl https://gc-stats.app/api/v1/teams/123 \
  -H "x-api-key: <your_key>"
```

A missing or invalid key returns `401 Unauthorized`. A suspended key returns `403 Forbidden`.

There are two kinds of keys:

- **Partner keys** — issued by GC Stats administrators and scoped to a user or an organization, with their own rate limit and [webhooks](/api/webhooks). See [API keys](/api/api-keys) to track a key's usage and regenerate it.
- **Public keys** — created by anyone from their account settings, with a shared rate limit. See [Public keys](/api/public-keys).

## Rate limit

**Partner keys** each have their own requests-per-minute limit, measured over a 60-second window. A `null` limit means unlimited requests.

**Public keys** share a requests-per-second limit per account (15 by default), whatever the number of public keys you hold. This limit can change at any time.

Some heavier routes count for more than one request. Once you exceed your limit, the API responds with `429 Too Many Requests` until the window rolls forward. The response carries a `Retry-After` header, in seconds: `60` for a partner key, `1` for a public key.
