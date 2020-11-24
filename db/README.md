# URBANOO DB
URBANOO database

## How to run the database

First build the image :
```
sudo docker build -t urbanoo .
```

Then start the container :
```
sudo docker run -d --name urbanoo --env POSTGRES_PASSWORD=[password] -p 5432:5432 urbanoo
```

Note: for data persistance you need to create a folder postgres-data