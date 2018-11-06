FROM node:8.12.0

COPY . /var/www

WORKDIR /var/www

RUN npm install
RUN npm install typescript -g
RUN npm run build
RUN npm install pm2 -g
ENV DOCKER_ENV true
# CMD ["npm","run start:prod"]

EXPOSE 3000

CMD pm2-docker start dist/server.js