FROM node:12

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 4000
CMD npm run dev