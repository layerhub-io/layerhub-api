import Model from '../utils/model';

class Frame extends Model implements IFrame {
  public id: string;
  public name: string;
  public width: number;
  public height: string;
  public preview: string;
  public unit: string;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  static get tableName() {
    return 'frames';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        preview: { type: 'string', minLength: 1, maxLength: 255 },
        unit: { type: 'string', minLength: 1, maxLength: 255 },
        width: { type: 'integer' },
        height: { type: 'integer' },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }
}

export default Frame;
