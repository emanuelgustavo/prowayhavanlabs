import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('currency').insert([
    {
      'currency_name': 'REAL',
      'abrev': 'BRL',
      'currency_price': 1.00
    },
    {
      'currency_name': 'DÓLAR',
      'abrev': 'USD',
      'currency_price': 5.37
    },
    {
      'currency_name': 'EURO',
      'abrev': 'EUR',
      'currency_price': 6.54
    },
    {
      'currency_name': 'LIBRA ESTERLINA',
      'abrev': 'GBP ',
      'currency_price': 7.59
    }
  ])
};