# Photoalbum challenge app

## work with docker

### Rebuild container

```bash
docker-compose build
```

If you've changed docker-compose - restart docker daemon first.

### Run container in dev mode locally

```bash
docker-compose up
```

### Deploy container to heroku

```bash
heroku container:push web -a photoalbum-staging
heroku container:release web -a photoalbum-staging
```
