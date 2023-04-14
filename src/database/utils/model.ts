import { Model } from 'objection';
import knex from '../connection';

Model.knex(knex);

export default Model;
