---
sidebar_position: 2
title: Authentification
---

# Authentification

Chaque requête vers `/api/v1/*` doit inclure l'en-tête `x-api-key` :

```http
GET /api/v1/teams/123 HTTP/1.1
Host: gc-stats.app
x-api-key: <votre_clé>
```

```bash
curl https://gc-stats.app/api/v1/teams/123 \
  -H "x-api-key: <votre_clé>"
```

Une clé manquante ou invalide renvoie `401 Unauthorized`.

Les clés sont émises par les administrateurs de GC Stats et rattachées à un utilisateur ou à une organisation. Consultez [Clés API](/api/api-keys) pour suivre l'utilisation d'une clé et la régénérer.

## Limite de débit

Chaque clé a sa propre limite de requêtes par minute, mesurée sur une fenêtre glissante de 60 secondes. Une limite `null` signifie un nombre de requêtes illimité. Une fois la limite dépassée, l'API répond avec `429 Too Many Requests` jusqu'à ce que la fenêtre avance.
