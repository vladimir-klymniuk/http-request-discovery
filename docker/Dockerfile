FROM node:10

ADD ./project /var/www/project

WORKDIR /var/www/project
COPY . ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]