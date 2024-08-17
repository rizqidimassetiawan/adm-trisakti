FROM node:12.13.0-alpine

USER root

# Essentials
RUN apk add --no-cache tzdata
RUN apk add -U tzdata

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json .
# RUN npm install -g @angular/cli
RUN npm install
RUN npm i @angular-devkit/build-angular

COPY --chown=node:node . .

CMD [ "npm", "run", "build-dev" ]

CMD [ "npm", "run", "start" ]
