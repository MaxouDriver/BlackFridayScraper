# BlackFridayScraper
App that help you track the best deal on your wishlist.

## Start server
First you need to create a docker-compose.override.yml, containing all the sensitive env variables.

docker-compose.override.yml template :
```
version: '3'
services:
    db:
        environment:
            - POSTGRES_PASSWORD=xxxx
    server:
        environment:
            - PG_USER=xxxx
            - PG_DATABASE=xxxx
            - PG_PASS=xxxx
```

Then use :
```
docker-compose up
```

Then to create the database, you will need an .env file and then run :
```
npm run migration:run
```
