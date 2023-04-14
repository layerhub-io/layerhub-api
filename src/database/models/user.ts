import Model from '../utils/model';
import FontModel from './font';
import RoleModel from './role';
import ProfileModal from './profile';

class User extends Model implements IUser {
  public id: string;
  public username: string;
  public email: string;
  public password: string;
  public roleId: string;
  public createdAt?: string | undefined;
  public updatedAt?: string | undefined;
  public role?: RoleModel;
  public fonts?: FontModel[];

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        roleId: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 8, maxLength: 255 },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    };
  }
  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    return {
      fonts: {
        relation: Model.HasManyRelation,
        modelClass: FontModel,
        join: {
          from: 'users.id',
          to: 'fonts.userId'
        }
      },
      enabledFonts: {
        relation: Model.HasManyRelation,
        modelClass: FontModel,
        join: {
          from: 'users.id',
          through: {
            from: 'enabled_fonts.userId',
            to: 'enabled_fonts.fontId'
          },
          to: 'fonts.id'
        }
      },
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: RoleModel,
        join: {
          from: 'users.roleId',
          to: 'roles.id'
        }
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: ProfileModal,
        join: {
          from: 'users.id',
          to: 'profiles.userId'
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

export default User;
