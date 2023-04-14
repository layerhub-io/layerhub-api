import Model from '../utils/model';

class Permission extends Model {
  static get tableName() {
    return 'permissions';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        code: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/role.model',
        join: {
          from: 'permissions.id',
          through: {
            from: 'role_permissions.permissionId',
            to: 'role_permissions.roleId'
          },
          to: 'roles.id'
        }
      }
    };
  }
}

export default Permission;
