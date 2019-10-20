FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install 

COPY . .

CMD [ "/bin/sh", "-c" ,"npm install && npm run-script build && npm start"]
 