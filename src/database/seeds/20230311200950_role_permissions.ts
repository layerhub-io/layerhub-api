import { Knex } from 'knex';
const table = 'role_permissions';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert([
    {
      id: '1',
      roleId: '1',
      permissionId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      roleId: '1',
      permissionId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    // {
    //   code: 'get_articles',
    //   roleId: '1',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'post_article',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'put_article',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'delete_article',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'get_authors',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'get_author',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'post_author',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'put_author',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   roleId: '1',
    //   code: 'delete_author',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }
  ]);
}
