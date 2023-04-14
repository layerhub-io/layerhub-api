import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('designs', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.boolean('published').defaultTo(false);
    table.string('userId').notNullable();
    table
      .foreign('userId')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('designs');
}
