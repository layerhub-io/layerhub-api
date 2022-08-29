import { Router } from "express";
import Controller from "./controller";

class ShapesRouter {
  router: Router;
  controller: Controller;

  constructor() {
    this.router = Router();
    this.controller = new Controller();
    this.init();
  }

  private init() {
    this.router.get("/templates", this.controller.get);
    this.router.get("/templates/:id", this.controller.getById);
    this.router.put("/templates/:id", this.controller.update);
    this.router.post("/templates", this.controller.create);
    this.router.delete("/templates/:id", this.controller.remove);
  }
}

export default ShapesRouter;
