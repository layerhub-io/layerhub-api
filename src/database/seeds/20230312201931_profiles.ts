import { Knex } from 'knex';

const table = 'profiles';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert([
    {
      id: '1',
      name: 'Valtim Junis',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'ADMIN'
    },
    {
      id: '2',
      name: 'Jane Doe',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'USA',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'EDITOR'
    }
  ]);
}
