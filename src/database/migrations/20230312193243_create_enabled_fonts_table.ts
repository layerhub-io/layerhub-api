import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('enabled_fonts', function (table) {
    table.string('id').primary();
    table
      .string('userId')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .string('fontId')
      .references('id')
      .inTable('fonts')
      .onDelete('CASCADE');
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').nullable();
    table.primary(['userId', 'fontId']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('enabled_fonts');
}
