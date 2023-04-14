import { Knex } from 'knex';

const table = 'users';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert([
    {
      id: 'ADMIN',
      username: 'layerhub_admin',
      email: 'admin@layerhub.io',
      password: '$2b$10$i9U5P4juThTWubFXiBEUNOghPEWc7sHY3Wdusc1oFG9fTi8eHBBIG',
      roleId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'EDITOR',
      username: 'layerhub_editor',
      email: 'editor@layerhub.io',
      roleId: '2',
      password: '$2b$10$i9U5P4juThTWubFXiBEUNOghPEWc7sHY3Wdusc1oFG9fTi8eHBBIG',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
