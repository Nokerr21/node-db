FROM node:18

WORKDIR /usr/src/node-db

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]