FROM node:8.16.0-jessie

WORKDIR /home/front/

COPY front/package*.json /home/front/

COPY front/* /home/front/

RUN npm install -g http-server @vue/cli @vue/cli-service node-sass

RUN npm install

# RUN npm run build

#EXPOSE 3000
#CMD [ "http-server", "dist" ]
#CMD [ "npm", "run", "serve" ]