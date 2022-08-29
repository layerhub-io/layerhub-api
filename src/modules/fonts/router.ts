import { Router } from "express"
import FontsController from "./controller"

class FontsRouter {
  router: Router
  handlers: FontsController

  constructor() {
    this.router = Router()
    this.handlers = new FontsController()
    this.init()
  }

  private init() {
    this.router.get("/fonts", this.handlers.getFonts)
  }
}

export default FontsRouter
