import { NextFunction, Response, Request } from "express"
import FontsService from "./service"

class FontsController {
  private service: FontsService
  constructor() {
    this.service = new FontsService()
  }

  public getFonts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fonts = await this.service.getFonts()
      return res.send(fonts)
    } catch (err) {
      next(err)
    }
  }
}

export default FontsController
