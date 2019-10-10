FROM node:10-alpine

RUN mkdir -p /home/front/node_modules

COPY front/* /home/front/

WORKDIR /home/front

RUN apk add python2
RUN npm install -g @vue/cli
RUN npm install -g node-sass

RUN npm install

CMD [ "npm", "serve" ]