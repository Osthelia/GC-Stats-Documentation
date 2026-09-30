---
sidebar_position: 3
title: Errors
---

# Errors

Every error is returned with the matching HTTP status code and a JSON body shaped like:

```json
{
  "error": "a message describing the error"
}
```

## HTTP status codes

| Code | Meaning |
|---|---|
| `400` | Invalid parameter (e.g. a non-numeric id, a date outside the `YYYY-MM-DD` format, an unknown enum value) |
| `401` | Missing `x-api-key` header, or an invalid/inactive key |
| `404` | Resource not found |
| `429` | [Rate limit](/api/authentication#rate-limit) exceeded |
| `500` | Internal error |
