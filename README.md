# Urbanoo
App that suggest and allow to create journeys with differents steps to a place.

## Commits

```
[INIT] Set new service
[FEAT] Create a new functionnality
[IMPR] Improvement on a feature
[REFACTO] Refactoring a feature
[FIX] Fix an error
[DOC] Documentation, comments
```

## Branches
```
[master] This is the main branch
[feature-branch] For every new feature
```

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

And for development purpose, you will maybe need some test data, so run :
```
npm run seed:run
```