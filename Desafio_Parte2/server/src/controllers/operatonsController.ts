import { Request, Response } from 'express';
import knex from '../database/connection';

class OperationsController {
  async index(request: Request, response: Response) {
    const operations = await knex('operations').select('*');

    return response.json(operations);
  }

  async create(request: Request, response: Response) {
    const {
      client_name,
      from_currency_id,
      to_currency_id,
      date,
      value,
      result,
      tax
    } = request.body;

    console.log(request.body);

    const trx = await knex.transaction();

    //const insertedIds = await trx('operations').insert(point);

    //await trx("point_items").insert(pointItems);

    await trx.commit();

    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default OperationsController;