import { Router } from "express"
import Controller from "./controller"

class ShapesRouter {
  router: Router
  controller: Controller

  constructor() {
    this.router = Router()
    this.controller = new Controller()
    this.init()
  }

  private init() {
    this.router.get("/components", this.controller.get)
    this.router.get("/components/:id", this.controller.getById)
    this.router.post("/components", this.controller.create)
    this.router.delete("/components/:id", this.controller.remove)
  }
}

export default ShapesRouter
