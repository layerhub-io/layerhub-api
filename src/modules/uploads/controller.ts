import { NextFunction, Response, Request } from "express"
import awsService from "../../services/aws"
import UploadsService from "./service"
import config from "../../common/app-config"
import { getUserIdFromRequest } from "../../utils/token"

class UploadsController {
  private service: UploadsService
  constructor() {
    this.service = new UploadsService()
    this.get = this.get.bind(this)
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = await getUserIdFromRequest(req)
      const data = await this.service.get({ ...(userId && { userId }) })
      res.send({ data })
    } catch (err) {
      next(err)
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const url = await awsService.getSignedUrlForUpload({ fileName: name })
      res.send({ url })
    } catch (err) {}
  }

  public deleteUpload = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string
      const deleted = await this.service.remove(id)
      res.send({ type: "upload", data: { ...deleted } })
    } catch (err) {
      next(err)
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = await getUserIdFromRequest(req)
      const { name, previewName } = req.body
      const response = await this.service.create({
        contentType: "",
        folder: "/",
        name: name,
        type: "",
        url: config.cdnBase + name,
        userId: userId ? userId : "",
        previewURL: config.cdnBase + previewName,
      })

      res.send(response)
    } catch (err) {
      next(err)
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction) {}
}

export default UploadsController
