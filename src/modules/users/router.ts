import { Router } from "express"
import UsersController from "./controller"

class UsersRouter {
  router: Router
  handlers: UsersController

  constructor() {
    this.router = Router()
    this.handlers = new UsersController()
    this.init()
  }

  private init() {
    this.router.post("/users", this.handlers.createUser)
    this.router.post("/tokens", this.handlers.createToken)
  }
}

export default UsersRouter
