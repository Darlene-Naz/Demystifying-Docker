FROM node

RUN mkdir -p /home/ec2-user/app/node_modules && chown -R node:node /home/ec2-user/app

WORKDIR /home/ec2-user/app

COPY package*.json ./

# Applying security principle of providing only limited privileges
RUN groupadd -r myuser && useradd -r -g myuser myuser

USER root

RUN npm install

COPY --chown=node:node . .

USER myuser

CMD [ "node", "index.js" ]
