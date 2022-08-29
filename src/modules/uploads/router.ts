import { Router } from "express"
import UploadsController from "./controller"

class UploadsRouter {
  router: Router
  handlers: UploadsController

  constructor() {
    this.router = Router()
    this.handlers = new UploadsController()
    this.init()
  }

  private init() {
    this.router.post("/uploads", this.handlers.create)
    this.router.get("/uploads", this.handlers.get)
    this.router.put("/uploads", this.handlers.update)
    this.router.delete("/uploads/:id", this.handlers.deleteUpload)
  }
}

export default UploadsRouter
