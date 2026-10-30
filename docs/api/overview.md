---
sidebar_position: 1
title: Overview
slug: /api/overview
---

# GC Stats API

The GC Stats API (`/api/v1`) gives you read access to player and team data. Every route:

- requires an [API key](/api/authentication);
- is subject to a per-key [rate limit](/api/authentication#rate-limit);
- returns JSON, including [errors](/api/errors).

There are two ways to get a key:

- create a free [public key](/api/public-keys) yourself from your account settings, with a shared rate limit;
- request a **partner key** from the GC Stats team, with a stable rate limit and [webhooks](/api/webhooks). See [API keys](/api/api-keys) for how to review, regenerate, and track usage of yours.

Partner keys can also receive [webhooks](/api/webhooks): GC Stats calls your HTTPS endpoints when a match, a tournament, a team or a player changes, so you don't have to poll.

The full, generated endpoint reference — every route, parameter, and response shape — lives under **API > Reference** in the sidebar, and is kept in sync with the API's OpenAPI specification.
