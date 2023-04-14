import Model from '../utils/model';

class Profile extends Model implements IProfile {
  public id: string;
  public fullName: string;
  public address: string;
  public city: string;
  public state: string;
  public zipCode: string;
  public country: string;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  static get tableName() {
    return 'profiles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        fullName: { type: 'string', minLength: 1, maxLength: 255 },
        address: { type: 'string', minLength: 1, maxLength: 255 },
        city: { type: 'string', minLength: 1, maxLength: 255 },
        state: { type: 'string', minLength: 1, maxLength: 255 },
        zipCode: { type: 'string', minLength: 1, maxLength: 255 },
        country: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user.model',
        join: {
          from: 'profiles.userId',
          to: 'users.id'
        }
      }
    };
  }
}

export default Profile;
