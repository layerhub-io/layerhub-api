import { NextFunction, Response, Request } from "express";
import ShapesService from "./service";
import Renderer from "../../services/layerhub";

class ElementsController {
  private service: ShapesService;
  constructor() {
    this.service = new ShapesService();
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const elements = await this.service.get();
      return res.send(elements);
    } catch (err) {
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const renderer = new Renderer();
      const imageURL = await renderer.render(data);
      const template = await this.service.create({
        ...data.objects[0],
        metadata: { ...data.objects[0].metadata, preview: imageURL },
      });

      return res.send(template);
    } catch (err) {
      next(err);
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const template = await this.service.remove(id);
      return res.send(template);
    } catch (err) {
      next(err);
    }
  }
}

export default ElementsController;
