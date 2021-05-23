import { Request, Response } from 'express';
import knex from '../database/connection';

class CurrencyController {
  async index(request: Request, response: Response) {
    const currencys = await knex('currency').select('*');

    return response.json(currencys);
  }
}

export default CurrencyController;