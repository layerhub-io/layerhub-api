import Model from '../utils/model';

class Role extends Model implements IRole {
  public id: string;
  public name: string;
  public description: string;
  public permissions: IPermission[];
  public createdAt: Date;
  public updatedAt: Date;
  static get tableName() {
    return 'roles';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/permission.model',
        join: {
          from: 'roles.id',
          through: {
            from: 'role_permissions.roleId',
            to: 'role_permissions.permissionId'
          },
          to: 'permissions.id'
        }
      },
      user: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/user.model',
        join: {
          from: 'roles.id',
          to: 'users.roleId'
        }
      }
    };
  }
}

export default Role;
