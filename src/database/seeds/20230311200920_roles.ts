import { Knex } from 'knex';
const table = 'roles';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert([
    {
      id: '1',
      name: 'Admin',
      description: 'Admin Role',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Simple User',
      description: 'Basic Role',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
