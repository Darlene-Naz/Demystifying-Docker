# Docker + Node.js

Dockerize a Node.js app.

#### Security practices

- No new privileges rule. Always run your docker images with `--security-opt=no-new-privileges` in order to prevent escalate privileges using setuid or setgid binaries.
- 
