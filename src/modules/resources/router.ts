import { Router } from "express"
import ResourcesController from "./controller"

class ResourcesRouter {
  router: Router
  handlers: ResourcesController

  constructor() {
    this.router = Router()
    this.handlers = new ResourcesController()
    this.init()
  }
  private init() {
    this.router.get("/resources/pixabay", this.handlers.getPixabayResources)
    this.router.get("/resources/pixabay/*", this.handlers.getPixabayResource)
    this.router.get("/resources/pexels", this.handlers.getPexelsResources)
    this.router.get("/resources/pexels/*", this.handlers.getPexelsResource)
    this.router.get("/resources/iconscout", this.handlers.getIconscoutResources)
    this.router.get("/resources/local/*", this.handlers.getLocalResource)
  }
}

export default ResourcesRouter
