import Model from '../utils/model';
import UserModel from './user';

class Font extends Model implements IFont {
  public id: string;
  public family: string;
  public fullName: string;
  public postScriptName: string;
  public preview: string;
  public style: string;
  public url: string;
  public category: string;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  static get tableName() {
    return 'fonts';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        family: { type: 'string', minLength: 1, maxLength: 255 },
        fullName: { type: 'string', minLength: 1, maxLength: 255 },
        postScriptName: { type: 'string', minLength: 1, maxLength: 255 },
        preview: { type: 'string', minLength: 1, maxLength: 255 },
        style: { type: 'string', minLength: 1, maxLength: 255 },
        url: { type: 'string', minLength: 1, maxLength: 255 },
        category: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: 'fonts.id',
          through: {
            from: 'enabled_fonts.fontId',
            to: 'enabled_fonts.userId'
          },
          to: 'users.id'
        }
      }
    };
  }
}

export default Font;
