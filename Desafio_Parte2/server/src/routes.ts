import express, { request } from 'express';

import knex from './database/connection';

import CurrencyController from './controllers/currencyController';

const routes = express();

const currencyController = new CurrencyController();

//rota para carregar lista de operações na pagina principal
routes.get('/listalloperations', async (request, response) => {
  const operations = await knex('operations').select('*');
  return response.json(operations);
});

//rota para somar valor total de operações
routes.get('/sumalloperations', async (request, response) => {
  const sumalloperations = await knex('operations').sum('value');
  return response.json({"valor total": sumalloperations});
})

//rota para somar valor total de operações
routes.get('/sumalltaxoperations', async (request, response) => {
  const sumalloperations = await knex('operations').sum('tax');
  return response.json({"valor total taxas": sumalloperations});
})

//rota para cadastrar nova operação
routes.post('/newoperation', async (request, response) => {
  const {
    client_name,
    from_currency_id,
    to_currency_id,
    date,
    value
  } = request.body;

  await knex('operations').insert({
    client_name,
    from_currency_id,
    to_currency_id,
    date,
    value,
    result: 100.00, // p/ teste
    tax: 10.00 // p/ teste
  });

  console.log(request.body)
  return response.json({ success: true, data: request.body })
});

//rota para relatorios
routes.get('/operationsreport', async (request, response) => {
  const filterClient = request.query.client_name;
  const filterFromDate = request.query.date_from;
  const filterToDate = request.query.date_to;
  const filterEspecificDate = request.query.date;

  console.log(request.query);

  const filteredOperations = await knex('operations')
    .where({
      client_name: filterClient
    })
    .select('*');
  
  return response.json(filteredOperations);
});

//rota para carregar as moedas
routes.get('/currency', currencyController.index);

export default routes;