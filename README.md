# Configuration Guide

### Mosquitto, NodeJS & MySQL

Delete previous containers:

```bash
  docker ps -a
  docker stop $(docker ps -a -q)
  docker rm container_01 container_02
  docker-compose up
  # docker-compose up -d
```

Generate all the necessary files to work:

```bash
  # Generate docker-compose file
  touch docker-compose.yml

  # Generate Dockerfiles to each of the containers
  touch Dockerfile.mqtt
  touch Dockerfile.mysql
  touch Dockerfile.node

  # Generate conf files to mosquitto container and mysql conf
  touch mosquitto.conf
  touch my.cnf
```

After that, is necessary initialize the Node app:

```bash
  npm init
  touch index.js
```

Inside the **package.json**, is necessary to add the packages required:

```json
  "dependencies": {
    "mqtt": "^4.2.7",
    "mysql": "^2.18.1"
  },
````
