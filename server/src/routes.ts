import express from "express";
import { ProductController } from "./controllers/product";
import { SiteController } from "./controllers/site";
import { UserController } from "./controllers/user";

export class Routes {
  public productController: ProductController = new ProductController();
  public siteController: SiteController = new SiteController();
  public userController: UserController = new UserController();

  public routes(app: express.Application): void {
    app.route("/auth/login").post(this.userController.login);
    app.route("/auth/register").post(this.userController.register);
    app.route("/user").get(this.userController.get);

    app.route("/products").get(this.productController.getAll);
    app.route("/products").post(this.productController.addOne);
    app.route("/products/:id").delete(this.productController.removeOne);

    app.route("/sites").get(this.siteController.getAll);
    app.route("/sites").post(this.siteController.addOne);
    app.route("/sites/:id").delete(this.siteController.removeOne);
  }
}