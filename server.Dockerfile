FROM node:12.11.0-buster

RUN mkdir -p /home/server/node_modules

COPY server/* /home/server/

WORKDIR /home/server

RUN npm i -g @nestjs/cli

#RUN apk add yarn python

#RUN apk add python

RUN npm i

CMD [ "npm", "start", "dev" ]