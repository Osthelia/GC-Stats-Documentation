---
sidebar_position: 3
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
| `404` | Ressource introuvable |
| `429` | [Limite de débit](/api/authentication#limite-de-débit) dépassée |
| `500` | Erreur interne |
