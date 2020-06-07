import { Request, Response } from 'express';
import knex from '../database/database';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => ({
      ...item,
      url: item = `http://192.168.100.138:3333/uploads/${item.image}`,
    }));

    return res.json(serializedItems);
  }
}

export default new ItemsController();
