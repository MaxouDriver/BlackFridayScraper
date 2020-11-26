import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Site } from '../entities/site';

export class SiteController {
    async getAll(req: Request, res: Response): Promise<void> {
        res.send(await getRepository(Site).find());
    }

    async addOne(req: Request, res: Response): Promise<void> {
        const { site } = req.body
        site.product = { id: parseInt(site.productId)}
        res.send(await getRepository(Site).save(site));
    }
    
    async removeOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.send(await getRepository(Site).delete(parseInt(id)));
    }
}