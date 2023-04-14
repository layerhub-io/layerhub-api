import knex from 'knex';
import { Model } from 'objection';
import { loadConfig } from '../config/config';
import knexfile from '../../knexfile';

const config = loadConfig();
const environment = config.environment;

const dbConfig = knexfile[environment];
const db = knex(dbConfig);

Model.knex(db);

export default db;
