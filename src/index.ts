import express, { Application } from "express"
import MongoDBConnection from "./common/database/connection"
import config from "./common/app-config"
import TemplatesModule from "./modules/templates"
import ElementsModule from "./modules/elements"
import AuthModule from "./modules/auth"
import UploadsModule from "./modules/uploads"
import UsersModule from "./modules/users"
import FontsModule from "./modules/fonts"
import CreationsModule from "./modules/creations"
import ResourcesModule from "./modules/resources"
import ComponentsModule from "./modules/components"

import errorHandler from "./middlewares/error-handler"
import notFound from "./middlewares/not-found-handler"

import cors from "cors"
import morgan from "morgan"

class App {
  public app: Application
  constructor() {
    this.app = express()
  }
  public init() {
    this.app.use(cors())
    this.app.use(morgan("dev"))
    this.app.use(express.json())
    this.initDatabaseClient()
    this.initRoutes()
    this.initMiddlewares()
    this.app.listen(config.appPort, () => console.log("running", config.appPort))
  }
  public initDatabaseClient() {
    MongoDBConnection.connect((err, db) => {
      console.log(err)
      if (db) {
        this.app.locals.db = db
      }
    })
  }
  public initRoutes() {
    new TemplatesModule(this.app)
    new ElementsModule(this.app)
    new AuthModule(this.app)
    new UploadsModule(this.app)
    new UsersModule(this.app)
    new FontsModule(this.app)
    new CreationsModule(this.app)
    new ResourcesModule(this.app)
    new ComponentsModule(this.app)
  }
  private initMiddlewares() {
    this.app.use(notFound)
    this.app.use(errorHandler)
  }
}

const app = new App()

app.init()
