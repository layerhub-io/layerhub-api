import DesignsService from '../services/designs';
import { Request, Response } from 'express';
import {
  CREATE_DESIGN_REQUEST,
  LIST_DESIGNS_REQUEST
} from '../common/utils/schemas';

class DesignsHandler {
  constructor(private designsService: DesignsService) {}

  public async create(request: Request, response: Response) {
    const user = request.user;
    const input = CREATE_DESIGN_REQUEST.parse(request.body);
    const payload = Object.assign({}, input, { userId: user?.id });
    const design = await this.designsService.create(payload);
    response.json(design);
  }

  public async list(request: Request, response: Response) {
    const input = LIST_DESIGNS_REQUEST.parse(request.query);
    const payload = Object.assign({}, input, {
      userId: 'EDITOR',
      published: false
    });
    const designs = await this.designsService.findMany(payload);
    response.json(designs);
  }

  public async search(request: Request, response: Response) {
    const user = request.user;
    const input = LIST_DESIGNS_REQUEST.parse(request.query);
    const payload = Object.assign({}, input, { userId: user?.id });
    const designs = await this.designsService.findMany(payload);
    response.json(designs);
  }
}

export default DesignsHandler;
