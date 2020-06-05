import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map((item) => {
            return {
                id: item.id,  
                title: item.title,
                image_url: `https://gist.githubusercontent.com/guilhermeomt/4b2f779ef9e1e034e8a8f8a8601871e9/raw/d7cb11dafb27bac3b76a3ba9f3ce934bbc17c4b8/${item.image}`,
            };
        });

        return res.json(serializedItems);
    }
}    

export default ItemsController;