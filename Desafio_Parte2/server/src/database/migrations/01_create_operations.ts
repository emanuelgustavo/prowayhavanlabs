import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('operations', table => {
    table.increments('id').primary();
    table.string('client_name').notNullable();    
    table.string('from_currency_id');
    table.string('to_currency_id');
    table.foreign('from_currency_id').references('id').inTable('currency');    
    table.foreign('to_currency_id').references('id').inTable('currency');
    table.date('date').notNullable();
    table.decimal('value').notNullable();
    table.decimal('result').notNullable();
    table.decimal('tax').notNullable();
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('operations');
}