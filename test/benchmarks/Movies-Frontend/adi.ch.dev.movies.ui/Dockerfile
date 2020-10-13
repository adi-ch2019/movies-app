# Movies-frontend 1
FROM node:alpine as node
LABEL author="Aditya Naidu"
WORKDIR /app
COPY . /app


RUN npm install
WORKDIR /app
COPY . /app

RUN npm run build -- --prod

#  Moves-frontend 2
FROM nginx:alpine
VOLUME /var/cache/nginx

COPY --from=node /app/dist /usr/share/nginx/html/
