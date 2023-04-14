import Model from '../utils/model';

class Category extends Model implements ICategory {
  public id: string;
  public name: string;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public subcategories: Category[];

  static get tableName() {
    return 'categories';
  }

  static get jsonSchema() {
    return {
      type: 'categories',
      properties: {
        id: { type: 'string' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    };
  }

  static get relationMappings() {
    return {
      subcategories: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: {
          from: 'categories.id',
          to: 'categories.parentId'
        }
      },
      parentCategory: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'categories.parentId',
          to: 'categories.id'
        }
      }
    };
  }
}

export default Category;
