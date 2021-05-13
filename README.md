# Demystifying Docker

- [Getting Started with Docker, Dockerfile, Docker Compose](https://github.com/Darlene-Naz/Demystifying-Docker/tree/main/Getting-Started)

- [A Secure, Highly Available, Dockerized app deployed on AWS](https://github.com/Darlene-Naz/Demystifying-Docker/tree/main/Secure-Highly-Available-Dockerized-App)


#### Security practices

- No new privileges rule. Always run your docker images with `--security-opt=no-new-privileges` in order to prevent escalate privileges using setuid or setgid binaries.
- While running docker compose run as follows `docker-compose --log-level info up`. This ensures that detailed logs are not being given to the user
