FROM node:12

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 4000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm run dev