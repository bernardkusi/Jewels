FROM node:20.10.0-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3001

CMD [ "npm","run","dev" ]