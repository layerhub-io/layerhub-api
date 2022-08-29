import { Router } from "express"
import AuthController from "./controller"

class ShapesRouter {
  router: Router
  handlers: AuthController

  constructor() {
    this.router = Router()
    this.handlers = new AuthController()
    this.init()
  }

  private init() {
    this.router.get("/auth/github/callback", this.handlers.authGithubCallback)
    this.router.get("/auth/google/callback", this.handlers.authGoogleCallback)
    this.router.post("/auth/google/url", this.handlers.getGoogleAuthURL)
    this.router.get("/auth/facebook/callback", this.handlers.authFacebookCallback)
    this.router.post("/auth/facebook/url", this.handlers.getFacebookAuthURL)
    this.router.post("/auth/signin", this.handlers.signin)
    this.router.post("/auth/signup", this.handlers.signup)
    this.router.post("/auth/me", this.handlers.getUserByToken)
    this.router.post("/auth", this.handlers.create)
    this.router.delete("/auth/:id", this.handlers.remove)
  }
}

export default ShapesRouter
