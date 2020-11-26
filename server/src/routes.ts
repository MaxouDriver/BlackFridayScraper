import express from "express";
import { ProductController } from "./controllers/product";
import { SiteController } from "./controllers/site";
import { AuthenticationController } from "./controllers/authentication";

export class Routes {
  public productController: ProductController = new ProductController();
  public siteController: SiteController = new SiteController();
  public authenticationController: AuthenticationController = new AuthenticationController();

  public routes(app: express.Application): void {
    app.route("/auth/login").post(this.authenticationController.login);
    app.route("/auth/register").post(this.authenticationController.register);

    app.route("/products").get(this.productController.getAll);
    app.route("/products").post(this.productController.addOne);
    app.route("/products/:id").delete(this.productController.removeOne);

    app.route("/sites").get(this.siteController.getAll);
    app.route("/sites").post(this.siteController.addOne);
    app.route("/sites/:id").delete(this.siteController.removeOne);
  }
}