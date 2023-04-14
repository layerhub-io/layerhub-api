import Font from '../database/models/font';
import EnabledFont from '../database/models/enabled-font';
class FontsService {
  public async fetchAll() {
    const fonts = await Font.query();
    return fonts;
  }
  public async findMany(payload: QueryFontsPayload) {
    const fonts = await EnabledFont.query()
      .where('userId', payload.userId)
      .withGraphFetched('font')
      .then((enabledFonts) => {
        const fontList = enabledFonts.map((enabledFont) => enabledFont.font);
        return fontList;
      });

    return fonts;
  }
}

export default FontsService;
