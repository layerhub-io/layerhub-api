import { Router } from "express"
import Controller from "./controller"

class CreationsRouter {
  router: Router
  controller: Controller

  constructor() {
    this.router = Router()
    this.controller = new Controller()
    this.init()
  }

  private init() {
    this.router.get("/creations", this.controller.getCreations)
    this.router.get("/creations/:id", this.controller.getCreationById)
    this.router.put("/creations/:id", this.controller.updateCreationById)
    this.router.post("/creations", this.controller.createCreation)
    this.router.delete("/creations/:id", this.controller.removeCreationById)
  }
}

export default CreationsRouter
