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

API keys are provisioned by GC Stats administrators and scoped to a user or an organization. See [API keys](/api/api-keys) for how to review, regenerate, and track usage of yours.

The full, generated endpoint reference — every route, parameter, and response shape — lives under **API > Reference** in the sidebar, and is kept in sync with the API's OpenAPI specification.
