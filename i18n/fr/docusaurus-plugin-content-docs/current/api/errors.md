---
sidebar_position: 6
title: Erreurs
---

# Erreurs

Chaque erreur est renvoyée avec le code de statut HTTP correspondant et un corps JSON de la forme :

```json
{
  "error": "a message describing the error"
}
```

## Codes de statut HTTP

| Code | Signification |
|---|---|
| `400` | Paramètre invalide (ex. un id non numérique, une date hors du format `YYYY-MM-DD`, une valeur d'énumération inconnue) |
| `401` | En-tête `x-api-key` manquant, ou clé invalide/inactive |
| `403` | La clé est suspendue, ou les [clés publiques](/api/public-keys) sont actuellement désactivées |
| `404` | Ressource introuvable |
| `429` | [Limite de débit](/api/authentication#limite-de-débit) dépassée. La réponse porte un en-tête `Retry-After` |
| `500` | Erreur interne |
