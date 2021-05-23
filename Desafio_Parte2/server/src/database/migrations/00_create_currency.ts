import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('currency', table => {
    table.increments('id').primary();
    table.string('currency_name').notNullable();
    table.string('abrev', 3).notNullable();
    table.decimal('currency_price').notNullable();
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('currency');
}