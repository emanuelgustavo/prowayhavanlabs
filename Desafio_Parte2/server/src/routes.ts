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
routes.get('/operationsreportbyname', operationsController.operationReportByName);

//filtrado por data especifica
routes.get('/operationsreportbydate', operationsController.operationReportByDate);

//filtrado por data periodo
routes.get('/operationsreportbyperiod', operationsController.operationReportByPeriod);

//filtrado por nome e periodo
routes.get('/operationsreportbynameandperiod', operationsController.operationsreportbynameandperiod);

//rota para carregar as moedas
routes.get('/currency', currencyController.index);

export default routes;