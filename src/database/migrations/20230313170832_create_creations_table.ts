import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('creations', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('frameId').notNullable();
    table
      .foreign('frameId')
      .references('id')
      .inTable('frames')
      .onDelete('CASCADE');

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
  return knex.schema.dropTableIfExists('creations');
}
