import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/product';

export class ProductController { 

    async getAll(req: Request, res: Response): Promise<void> {
        res.send(await getRepository(Product).find({
            relations: ["sites", "sites.product"]
        }));
    }

    async getOne(req: Request, res: Response): Promise<void> {
        res.send(await getRepository(Product).findOne(req.params.id, {
            relations: ["sites"]
        }));
    }

    async removeOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.send(await getRepository(Product).delete(parseInt(id)));
    }

    async addOne(req: any, res: Response): Promise<void> {
        const { product } = req.body
        res.send(await getRepository(Product).save({
            ...product,
            user: {
                id: req.user.userId
            }
        }));
    }
}