import { NextFunction, Response, Request } from "express";
import Service from "./service";
import { getUserIdFromRequest } from "../../utils/token";
import Renderer from "../../services/layerhub";

class ComponentsHandler {
  private service: Service;
  constructor() {
    this.service = new Service();
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.downloadById = this.downloadById.bind(this);
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = await getUserIdFromRequest(req);
      const components = await this.service.get({ userId });
      return res.send(components);
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const template = await this.service.getById(id);
      return res.send(template);
    } catch (err) {
      next(err);
    }
  }

  public async downloadById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const template = await this.service.getById(id);

      const renderer = new Renderer();
      const imageURL = await renderer.render(template);

      return res.send(imageURL);
    } catch (err) {
      console.log("err", err);
      next(err);
    }
  }

  public async download(req: Request, res: Response, next: NextFunction) {
    try {
      const template = req.body;

      const renderer = new Renderer();
      const imageURL = await renderer.render(template);

      return res.send({ source: imageURL });
    } catch (err) {
      console.log("err", err);
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const component = req.body;

      const metadata = component.metadata ? component.metadata : {};
      let userId = await getUserIdFromRequest(req);

      const renderer = new Renderer();
      const imageURL = await renderer.render({
        frame: {
          width: component.width,
          height: component.height,
        },
        objects: [component],
      });

      const template = await this.service.create({
        ...component,
        metadata: { ...metadata, preview: imageURL },
        ...(userId && { userId }),
      });
      return res.send(template);
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const data = req.body;
      const template = await this.service.update(id, data);
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

export default ComponentsHandler;
