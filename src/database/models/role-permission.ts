import Model from '../utils/model';

class RolePermission extends Model {
  static get tableName() {
    return 'role_permissions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        roleId: { type: 'string' },
        permissionId: { type: 'string' },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/role.model',
        join: {
          from: 'role_permissions.roleId',
          to: 'roles.id'
        }
      },
      permission: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/permission.model',
        join: {
          from: 'role_permissions.permissionId',
          to: 'permissions.id'
        }
      }
    };
  }
}

export default RolePermission;
