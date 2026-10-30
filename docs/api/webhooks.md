---
sidebar_position: 5
title: Webhooks
slug: /api/webhooks
---

# Webhooks

Instead of polling the API, a [partner key](/api/api-keys#partner-and-public-keys) can register HTTPS endpoints: GC Stats then sends a `POST` to each of them when a match, a tournament, a team or a player changes.

:::note
Webhooks are reserved for **partner keys**. [Public keys](/api/public-keys) don't have access to them.
:::

## Managing endpoints

Endpoints are managed from the Dashboard's **Webhooks** page:

- for a personal key: **API keys → Webhooks** (`/dashboard/api-keys/webhooks`);
- for an organization key: **Developer → Webhooks** in that organization's sidebar (`/dashboard/{organizationId}/webhooks`). You need the **Manage API keys** permission.

If you hold several partner keys, pick one with the key switcher at the top of the page. Each key can have up to **10 endpoints**. For each endpoint you can:

- **Edit** its URL, description, events and filters;
- **Enable / disable** it with the toggle;
- **Send a test** — sends a [`ping`](#test-ping) right away and shows the HTTP status you answered;
- **Show secret** / **New secret** — reveal the [signing secret](#verifying-signatures), or replace it (the old one stops working immediately);
- **Delete** it, along with its delivery history.

Below the endpoints, **Recent deliveries** lists the last 30 deliveries of the key (date, event, endpoint, status, attempts), with a **Resend** button on each.

:::warning
If the API key itself is deactivated, all its webhook endpoints are **deleted**, and none can be added until it is reactivated.
:::

### Endpoint URL

The URL must:

- use `https://`;
- point to a public address — `localhost`, private, loopback and link-local addresses (and hostnames such as `*.local`, `*.internal`, `*.lan`) are refused. The address is checked again each time a delivery is sent, so a hostname that later resolves to a private address is refused too;
- contain no username or password;
- be at most 500 characters long.

Redirects are not followed: answer from the URL itself.

## Events

| Event | Sent when |
|---|---|
| `match.created` | A match is created |
| `match.updated` | A match changes, including the score or status of one of its maps |
| `tournament.created` | A tournament is created |
| `tournament.updated` | A tournament changes |
| `team.updated` | A team changes |
| `player.updated` | A player changes |

Pick at least one event per endpoint.

Changes are collected and sent about **every minute**. Several changes of the same entity within that window are merged into a single delivery, and the payload always holds the entity **as it is when the delivery is queued**, not a diff. Hidden or deleted entities are never sent.

Deliveries aren't guaranteed to arrive in order: rely on `occurred_at` and on the data itself rather than on arrival order.

## Filters

Empty filters let everything through. All the filters you set must match.

| Filter | Values | Applies to |
|---|---|---|
| **Regions** | Up to 20 tournament regions | Match and tournament events only (a match uses its tournament's region) |
| **Official** | Official and unofficial / Official only / Unofficial only | Match and tournament events only |
| **Teams** | Up to 50 teams | Every event: matches where one of these teams plays, tournaments they entered, these teams themselves, and players whose current team is one of them |

A match with no tournament has no region and no official flag: it is filtered out as soon as a region filter, or an official filter other than *Official and unofficial*, is set.

## Request

Each delivery is a `POST` with a JSON body and these headers:

| Header | Value |
|---|---|
| `Content-Type` | `application/json` |
| `User-Agent` | `GCStats-Webhook/1.0` |
| `X-GCS-Event` | The event, e.g. `match.updated` |
| `X-GCS-Delivery` | The delivery id. It stays the same when a delivery is retried or resent: use it to ignore duplicates |
| `X-GCS-Timestamp` | Unix time of the attempt, in seconds |
| `X-GCS-Signature` | `sha256=` followed by the hex [signature](#verifying-signatures) |

### Payload

```json
{
  "event": "match.updated",
  "event_id": 18342,
  "occurred_at": "2026-10-30T18:42:07.000Z",
  "region": "EMEA",
  "official": true,
  "data": {
    "id": 5521,
    "scheduled_at": "2026-10-30T18:00:00.000Z",
    "status": "live",
    "tournament_id": 412,
    "tournament_name": "…",
    "team_a_id": 87,
    "team_a_name": "…",
    "score_a": 1,
    "score_b": 0,
    "team_b_id": 93,
    "team_b_name": "…",
    "…": "…"
  }
}
```

| Field | Description |
|---|---|
| `event` | The event type |
| `event_id` | Id of the change that triggered the delivery |
| `occurred_at` | When the change was recorded (ISO 8601) |
| `region` | Region of the tournament, `null` if none. Match and tournament events only |
| `official` | Whether the tournament is official, `null` if unknown. Match and tournament events only |
| `data` | The entity, with the same fields as the matching OpenData dataset (`matches`, `tournaments`, `teams` or `players`) |

### Test ping

**Send a test** posts a `ping` event, signed like any other delivery:

```json
{
  "event": "ping",
  "occurred_at": "2026-10-30T18:42:07.000Z",
  "data": { "webhook_id": 12, "message": "GC Stats webhook test" }
}
```

A failed test is not retried and never counts toward [disabling the endpoint](#retries-and-automatic-disabling).

## Verifying signatures

Each endpoint has its own signing secret (`whsec_…`), shown once when the endpoint is created and available later with **Show secret**. The signature is the **HMAC-SHA256**, keyed with the whole secret, of:

```text
<X-GCS-Timestamp>.<raw request body>
```

To verify a delivery:

1. Compute the HMAC over the **raw** body, exactly as received — not over a re-serialized JSON.
2. Compare it to the `X-GCS-Signature` header (after `sha256=`) with a constant-time comparison.
3. Reject deliveries whose timestamp is too old (for example more than 5 minutes) to block replays.

```js title="Node.js"
import crypto from "node:crypto";

function verify(secret, headers, rawBody) {
  const timestamp = headers["x-gcs-timestamp"];
  const expected = "sha256=" + crypto.createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");
  const received = headers["x-gcs-signature"] ?? "";
  const fresh = Math.abs(Date.now() / 1000 - Number(timestamp)) < 300;
  return fresh && received.length === expected.length && crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
}
```

```python title="Python"
import hashlib, hmac, time

def verify(secret: str, headers, raw_body: bytes) -> bool:
    timestamp = headers["X-GCS-Timestamp"]
    expected = "sha256=" + hmac.new(secret.encode(), f"{timestamp}.".encode() + raw_body, hashlib.sha256).hexdigest()
    fresh = abs(time.time() - int(timestamp)) < 300
    return fresh and hmac.compare_digest(headers.get("X-GCS-Signature", ""), expected)
```

## Responding

Answer with any **2xx** status within **10 seconds**. Anything else — another status, a timeout, a connection error — is a failure. The response body is ignored.

Acknowledge quickly and do the heavy work afterwards (in a queue, for example) so you stay under the deadline.

## Retries and automatic disabling

A failed delivery is retried with a growing delay: after 1 minute, 5 minutes, 30 minutes, 2 hours, then 6 hours. After those 6 attempts (about 9 hours in all), it is marked **Failed** for good. You can still **Resend** it by hand from the deliveries list; a manual resend doesn't change the retry schedule of a delivery still pending.

After **20 failed attempts in a row**, the endpoint is switched off automatically, and the Dashboard says so. Fix the endpoint, then enable it again with the toggle: this resets the failure count.

Delivery history is kept for 30 days.
