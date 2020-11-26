require('dotenv').config()

export = {
   "type": "postgres",
   "host": process.env.PG_HOST,
   "port": parseInt(process.env.PG_PORT!),
   "username": process.env.PG_USER,
   "password": process.env.PG_PASS,
   "database": process.env.PG_DATABASE,
   "synchronize": process.env.DB_SYNC,
   "logging": process.env.DB_LOGGING,
   "entities": [
      "src/entities/*.ts"
   ],
   "migrations": [
      "src/migrations/*.ts"
   ],
   "reconnectInterval": 5000
}