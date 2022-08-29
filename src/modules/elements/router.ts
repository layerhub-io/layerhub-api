import { Router } from "express"
import ElementsController from "./controller"

class ShapesRouter {
  router: Router
  handlers: ElementsController

  constructor() {
    this.router = Router()
    this.handlers = new ElementsController()
    this.init()
  }

  private init() {
    this.router.get("/elements", this.handlers.get)
    this.router.post("/elements", this.handlers.create)
    this.router.delete("/elements/:id", this.handlers.remove)
  }
}

export default ShapesRouter
