import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('fonts', (table) => {
    table.string('id').primary();
    table.string('family').notNullable();
    table.string('fullName').notNullable();
    table.string('postScriptName').notNullable();
    table.string('preview').notNullable();
    table.string('style').notNullable();
    table.string('url').notNullable();
    table.string('category').notNullable();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').nullable();

    table.string('userId');
    table
      .foreign('userId')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('fonts');
}
