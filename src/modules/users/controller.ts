import { NextFunction, Response, Request } from "express"
import awsService from "../../services/aws"
import UploadsService from "./service"
import config from "../../common/app-config"
import UsersService from "./service"
import uniqueId from "../../utils/unique"

class UsersController {
  private service: UploadsService
  private usersService: UsersService
  constructor() {
    this.usersService = new UsersService()
    this.get = this.get.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.query.token
      let params = {}
      if (token) {
        params = {
          userId: token,
        }
      }
      const data = await this.service.get(params)
      res.send({ data })
    } catch (err) {
      next(err)
    }
  }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const props = req.body
      const user = await this.usersService.createUser(props)
      res.send({
        type: "user",
        data: user,
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public createToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const props = req.body
      const secret = uniqueId()
      const token = await this.usersService.createToken({ ...props, secret })
      res.send({
        type: "token",
        data: token,
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.query.token as string

      const { name } = req.body
      const response = await this.service.create({
        contentType: "",
        folder: "/",
        name: name,
        type: "",
        url: config.cdnBase + name,
        userId: token ? token : "",
      })
      res.send(response)
    } catch (err) {
      next(err)
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction) {}
}

export default UsersController
