import express, { Router, Response, Request } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import path from 'path';
import { createStream } from 'rotating-file-stream';
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import { Routes } from "./routes";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    const enableOriginsForCredentials:CorsOptionsDelegate = (req: express.Request, callback: (err: Error | null, options?: CorsOptions) => void) => {
        callback(null, {
            origin: true,
            credentials: true
        })
    }

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cookieParser());
    this.app.use(cors(enableOriginsForCredentials));

  }
}

export default App;