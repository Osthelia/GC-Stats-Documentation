---
sidebar_position: 6
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
| `403` | The key is suspended, or [public keys](/api/public-keys) are currently disabled |
| `404` | Resource not found |
| `429` | [Rate limit](/api/authentication#rate-limit) exceeded. The response carries a `Retry-After` header |
| `500` | Internal error |
