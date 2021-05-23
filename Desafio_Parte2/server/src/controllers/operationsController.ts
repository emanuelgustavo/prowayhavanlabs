import { Request, Response } from 'express';
import knex from '../database/connection';

import Calculations from '../utils/calculations';

const calculations = new Calculations();

class OperationsController {
  index = async (request: Request, response: Response) => {
    const operations = await knex('operations').select('*');
    return response.json(operations);
  }

  sumAllOperations = async (request: Request, response: Response) => {
    const sumalloperations = await knex('operations').sum('result');
    return response.json({"valor total": sumalloperations});
  }

  sumAllOperationsTax = async  (request: Request, response: Response) => {
    const sumalloperations = await knex('operations').sum('tax');
    return response.json({"valor total taxas": sumalloperations});
  }

  addNewOperation = async (request: Request, response: Response) => {
    const {
      client_name,
      from_currency_id,
      to_currency_id,
      date,
      value
    } = request.body;

    const fromCurrencyValue = await knex('currency')
      .where('id', from_currency_id)
      .select('currency_price');
    const toCurrencyValue = await knex('currency')
      .where('id', to_currency_id)
      .select('currency_price');

    const operationValue = calculations.calculateOperationValues(
      value,
      Number(fromCurrencyValue[0].currency_price),
      Number(toCurrencyValue[0].currency_price)
    );

    await knex('operations').insert({
      client_name,
      from_currency_id,
      to_currency_id, 
      date,
      value,
      result: operationValue[0],
      tax: operationValue[1] // p/ teste
    });

    return response.json({ fromCurrencyValue, toCurrencyValue, operationValue })
  }
}

export default OperationsController;