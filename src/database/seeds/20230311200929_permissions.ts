import { Knex } from 'knex';
const table = 'permissions';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert([
    {
      id: '1',
      code: 'get_article',
      description: 'Permission to get one article',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      code: 'get_articles',
      description: 'Permission to get articles',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      code: 'post_article',
      description: 'Permission to create article',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
