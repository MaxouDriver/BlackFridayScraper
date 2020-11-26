import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cron from "cron";
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import { Routes } from "./routes";
import { ScraperController } from "./controllers/scraper";
import verifyJSONWebToken from "./middlewares/authentication"

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public scraperController: ScraperController = new ScraperController();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);

    // const job = new cron.CronJob('* 30 * * * *', () => {
    //   this.scraperController.scrapSites()
    // }, null, true, 'Europe/Paris');
    // job.start();
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
    this.app.use(verifyJSONWebToken);
  }
}

export default App;