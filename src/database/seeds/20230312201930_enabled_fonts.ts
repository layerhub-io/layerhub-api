import { Knex } from 'knex';
import enabledFonts from '../data/enabled_fonts.json';

const table = 'enabled_fonts';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  return knex(table).insert(enabledFonts);
}
