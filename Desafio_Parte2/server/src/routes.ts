import express from 'express';

import knex from './database/connection';

import CurrencyController from './controllers/currencyController';
import OperationsController from './controllers/operationsController';

const routes = express();

const currencyController = new CurrencyController();
const operationsController = new OperationsController();

//rota para carregar lista de operações na pagina principal
routes.get('/listalloperations', operationsController.index);

//rota para somar valor total de operações
routes.get('/sumalloperations', operationsController.sumAllOperations);

//rota para somar valor total de taxa das operações
routes.get('/sumalltaxoperations', operationsController.sumAllOperationsTax);

//rota para cadastrar nova operação
routes.post('/newoperation', operationsController.addNewOperation);

//rota para relatorios
//filtrado pelo cliente
routes.get('/operationsreportbyname', async (request, response) => {
  const filterClient = request.query.client_name;

  console.log(request.query);

  const filteredOperations = await knex('operations')
    .where({
      client_name: filterClient
    })
    .select('*');
  
  return response.json(filteredOperations);
});

//filtrado por data especifica
routes.get('/operationsreportbydate', async (request, response) => {
  const filterSpecificDate = request.query.date;

  const filteredOperations = await knex('operations')
    .where({
      date: filterSpecificDate
    })
    .select('*');
  
  return response.json(filteredOperations);
});

//filtrado por data periodo
routes.get('/operationsreportbyperiod', async (request, response) => {
  const fromDatePeriod = String(request.query.from_date_period);
  const toDatePeriod = String(request.query.to_date_period);

  const filteredOperations = await knex('operations')
    .where(function () {
      this.where('date', '>=', fromDatePeriod)
      .andWhere('date', '<=', toDatePeriod)
    })
    .select('*');
  
  return response.json(filteredOperations);
});

//filtrado por nome e periodo
routes.get('/operationsreportbynameandperiod', async (request, response) => {
  const fromDatePeriod = String(request.query.from_date_period);
  const toDatePeriod = String(request.query.to_date_period);
  const nameFilter = String(request.query.client_name);

  const filteredOperations = await knex('operations')
    .whereBetween('date', [fromDatePeriod, toDatePeriod])
    .andWhere('client_name', nameFilter)
    .select('*');
  
  return response.json(filteredOperations);
});

//rota para carregar as moedas
routes.get('/currency', currencyController.index);

export default routes;