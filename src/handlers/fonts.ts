import { Request, Response } from 'express';
import {
  LIST_FONTS_REQUEST,
  SEARCH_FONTS_REQUEST
} from '../common/utils/schemas';
import FontsService from '../services/fonts';

class FontsHandler {
  constructor(private fontsService: FontsService) {}

  public create() {
    console.log('HI');
  }

  public retrieve() {
    console.log('HI');
  }

  public update() {
    console.log('HI');
  }

  public delete() {
    console.log('HI');
  }

  public async search(request: Request, response: Response) {
    const input = SEARCH_FONTS_REQUEST.parse(request.body);
    const fonts = await this.fontsService.findMany({ userId: 'EDITOR' });
    response.json(fonts);
  }

  public async list(request: Request, response: Response) {
    const input = LIST_FONTS_REQUEST.parse(request.query);
    const fonts = await this.fontsService.findMany({ userId: 'EDITOR' });
    response.json({ fonts });
  }
}

export default FontsHandler;
