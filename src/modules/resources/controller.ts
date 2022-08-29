import { NextFunction, Response, Request } from "express";
import IconscoutService from "../../services/iconscout";
import PexelsService from "../../services/pexels";
import PixabayService from "../../services/pixabay";

class ResourcesController {
  private pixabayService: PixabayService;
  private pexelsService: PexelsService;
  private iconscoutService: IconscoutService;
  constructor() {
    this.pixabayService = new PixabayService();
    this.pexelsService = new PexelsService();
    this.iconscoutService = new IconscoutService();
  }

  public getPixabayResources = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { query, page, perPage } = req.query as any;
      const resources = await this.pixabayService.getResources({
        query,
        page,
        perPage,
      });
      return res.send(resources);
    } catch (err) {
      next(err);
    }
  };

  public getPixabayResource = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const baseURL = "https://cdn.pixabay.com/";
    const suffix = req.url.split("/resources/pixabay/")[1];
    return "request.get(url).pipe(res)";
  };

  public getPexelsResource = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const baseURL = "https://images.pexels.com/";
    const suffix = req.url.split("/resources/pexels/")[1];
    return "request.get(url).pipe(res)";
  };

  public getLocalResource = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const baseURL = "https://d3q7mfli5umxdg.cloudfront.net/";
    const suffix = req.url.split("/resources/local/")[1];
    return "request.get(url).pipe(res)";
  };

  public getPexelsResources = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { query, page, perPage } = req.query as any;
      const resources = await this.pexelsService.getResources({
        query,
        page,
        perPage,
      });
      return res.send(resources);
    } catch (err) {
      next(err);
    }
  };

  public getIconscoutResources = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { query, page, perPage } = req.query as any;
      const resources = await this.iconscoutService.getResources({
        query,
        page,
        perPage,
      });
      return res.send(resources);
    } catch (err) {
      next(err);
    }
  };
}

export default ResourcesController;
