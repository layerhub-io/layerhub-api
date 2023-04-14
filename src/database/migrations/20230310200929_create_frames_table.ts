import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('frames', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.integer('width').unsigned().notNullable();
    table.integer('height').unsigned().notNullable();
    table.string('preview').notNullable();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('frames');
}
