import { Application } from "express"
import Router from "./router"

class UsersModule {
  constructor(public app: Application) {
    const router = new Router().router
    this.app.use(router)
  }
}

export default UsersModule
