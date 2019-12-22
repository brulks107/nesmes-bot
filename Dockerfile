FROM node:12.13.1-alpine

WORKDIR /usr/bot

COPY package.json .

COPY package-lock.json .

RUN npm install --production

COPY dist .
