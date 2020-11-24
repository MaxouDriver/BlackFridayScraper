import express, { Request, Response, Router } from "express";
import { ProductController } from "./controllers/product";
import { SiteController } from "./controllers/site";
import { ScraperController } from "./controllers/scraper";

export class Routes {
  public productController: ProductController = new ProductController();
  public siteController: SiteController = new SiteController();
  public scraperController: ScraperController = new ScraperController();

  public routes(app: express.Application): void {
    app.route("/products").get(this.productController.getAll);
    app.route("/products/:id/deals").get(this.productController.getDeals);

    app.route("/sites").get(this.siteController.getAll);
    app.route("/sites").post(this.siteController.addOne);
    app.route("/sites/:id").delete(this.siteController.removeOne);
  }
}