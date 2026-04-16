---
title: "API Reference"
category: api
---

# API Reference

Complete API documentation for the Aioverse platform.

## Authentication

All API requests require authentication using Bearer tokens.

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.aioverse.dev/v1/resource
```

### Getting an API Token

```bash
POST /api/v1/auth/token
Content-Type: application/json

{
  "username": "user@example.com",
  "password": "your-password"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
```

## Users API

### Get User

```bash
GET /api/v1/users/{id}
```

**Response:**
```json
{
  "id": "123",
  "username": "johndoe",
  "email": "john@example.com",
  "created_at": "2026-01-01T00:00:00Z"
}
```

### Create User

```bash
POST /api/v1/users
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "secure-password"
}
```

### Update User

```bash
PUT /api/v1/users/{id}
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

### Delete User

```bash
DELETE /api/v1/users/{id}
```

## Projects API

### List Projects

```bash
GET /api/v1/projects?page=1&limit=10
```

**Response:**
```json
{
  "data": [
    {
      "id": "proj-123",
      "name": "My Project",
      "description": "Project description",
      "created_at": "2026-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50
  }
}
```

### Get Project

```bash
GET /api/v1/projects/{id}
```

### Create Project

```bash
POST /api/v1/projects
Content-Type: application/json

{
  "name": "New Project",
  "description": "Description",
  "settings": {
    "visibility": "public"
  }
}
```

## Resources API

### List Resources

```bash
GET /api/v1/projects/{project_id}/resources
```

### Upload Resource

```bash
POST /api/v1/projects/{project_id}/resources
Content-Type: multipart/form-data

file: (binary)
```

## Error Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 429  | Too Many Requests |
| 500  | Internal Server Error |

**Error Response:**
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request is invalid",
    "details": {}
  }
}
```

## Rate Limiting

- 100 requests per minute for authenticated users
- 10 requests per minute for unauthenticated requests

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```

## Webhooks

Subscribe to events via webhooks:

```bash
POST /api/v1/webhooks
Content-Type: application/json

{
  "url": "https://your-app.com/webhook",
  "events": ["project.created", "project.updated"]
}
```

## SDKs

Official SDKs available for:
- JavaScript/TypeScript
- Python
- Go
- Ruby

See [SDK Documentation](/docx/library/sdks/) for details.
