FROM node:lts-bullseye

WORKDIR /app

RUN apt upgrade & apt update
RUN npm install -g live-server

COPY . .

EXPOSE 3000

CMD live-server --port=3000