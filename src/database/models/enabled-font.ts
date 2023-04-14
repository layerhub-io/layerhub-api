import Model from '../utils/model';
import UserModel from './user';
import FontModel from './font';

class EnabledFonts extends Model {
  public font: FontModel;
  static get tableName() {
    return 'enabled_fonts';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'enabled_fonts.userId',
          to: 'users.id'
        }
      },
      font: {
        relation: Model.BelongsToOneRelation,
        modelClass: FontModel,
        join: {
          from: 'enabled_fonts.fontId',
          to: 'fonts.id'
        }
      }
    };
  }
}

export default EnabledFonts;
