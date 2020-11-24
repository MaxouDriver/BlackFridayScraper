import App from "./app";
import { createConnection } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

createConnection().then(async connection => {
    const app = new App().app
    app.listen(process.env.API_PORT, () => {
        console.log("Express server listening on port " + process.env.API_PORT);
    })
}).catch(() => {
    console.log("unable to connect");
});
