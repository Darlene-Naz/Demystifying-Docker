# Demystifying Docker

- [Getting Started with Docker, Dockerfile, Docker Compose](https://github.com/Darlene-Naz/Demystifying-Docker/tree/main/Getting-Started)

- [A Secure, Highly Available, Dockerized app deployed on AWS](https://github.com/Darlene-Naz/Demystifying-Docker/tree/main/Load-Balanced-Nodejs-App)



#### Security practices

- No new privileges rule. Always run your docker images with `--security-opt=no-new-privileges` in order to prevent escalate privileges using setuid or setgid binaries.
