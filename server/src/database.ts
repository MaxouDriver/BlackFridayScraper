import { createConnection } from "typeorm";

export const createDBConnection = () => {
    createConnection().then(connection => {
        console.log("Connected to database");
    }).catch(error => console.log(error));
}