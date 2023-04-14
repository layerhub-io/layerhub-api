import Model from '../utils/model';

class Design extends Model implements IDesign {
  public id: string;
  public name: string;
  public published: boolean;
  public description: string;
  public createdAt?: string | undefined;
  public updatedAt?: string | undefined;

  static get tableName() {
    return 'designs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        published: { type: 'boolean' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user.model',
        join: {
          from: 'designs.userId',
          to: 'users.id'
        }
      }
    };
  }

  $beforeInsert() {
    const now = new Date().toISOString();
    this.createdAt = now;
    this.updatedAt = now;
  }

  $beforeUpdate() {
    const now = new Date().toISOString();
    this.updatedAt = now;
  }
}

export default Design;
