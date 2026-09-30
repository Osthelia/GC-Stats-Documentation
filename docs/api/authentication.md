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

A missing or invalid key returns `401 Unauthorized`.

Keys are issued by GC Stats administrators and scoped to a user or an organization. See [API keys](/api/api-keys) to track a key's usage and regenerate it.

## Rate limit

Each key has its own requests-per-minute limit, measured over a 60-second sliding window. A `null` limit means unlimited requests. Once you exceed your limit, the API responds with `429 Too Many Requests` until the window rolls forward.
