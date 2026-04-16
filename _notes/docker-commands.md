---
title: "Docker Commands Cheat Sheet"
category: devops
---

# Docker Commands Cheat Sheet

## Container Management

```bash
# List running containers
docker ps

# List all containers
docker ps -a

# Run a container
docker run <image>

# Run container in background
docker run -d <image>

# Run with port mapping
docker run -p 8080:80 <image>

# Stop container
docker stop <container-id>

# Start container
docker start <container-id>

# Remove container
docker rm <container-id>

# Execute command in running container
docker exec -it <container-id> bash
```

## Image Management

```bash
# List images
docker images

# Pull image
docker pull <image>

# Build image
docker build -t <tag> .

# Remove image
docker rmi <image-id>

# Tag image
docker tag <image> <new-tag>

# Push image
docker push <image>
```

## Docker Compose

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Rebuild services
docker-compose build
```

## Cleanup

```bash
# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# Remove everything unused
docker system prune -a
```

## Networking

```bash
# List networks
docker network ls

# Create network
docker network create <name>

# Connect container to network
docker network connect <network> <container>

# Inspect network
docker network inspect <network>
```

---

See also: [Kubernetes Commands](/docx/notes/kubernetes-commands/)
