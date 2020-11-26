# BlackFridayScraper
App that help you track the best deal on your wishlist.

## Start server/client
First you need to create a .env, containing all the sensitive env variables.
```
cp .env.example .env
```

Then use :
```
docker-compose up
```

In order to create the database, run :
```
npm run migration:run
```
