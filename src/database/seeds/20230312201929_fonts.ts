import { Knex } from 'knex';
import fonts from '../data/fonts.json';

const table = 'fonts';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert(fonts);
}
