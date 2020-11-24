import {Router, Request, Response} from 'express';
import { getConnection, getRepository, Repository } from 'typeorm';
import { ScraperController } from './scraper';
import { Product } from '../entities/product';

export class ProductController { 

    async getAll(req: Request, res: Response): Promise<void> {
        res.send(await getRepository(Product).find({
            relations: ["sites"]
        }));
    }

    async getOne(req: Request, res: Response): Promise<void> {
        res.send(await getRepository(Product).findOne(req.params.id, {
            relations: ["sites"]
        }));
    }

    public getDeals(req: Request, res: Response): void {
        const {
            url,
            htmlTarget,
            id
        } = req.params
        
     const scraperController: ScraperController = new ScraperController();

         getRepository(Product).findOneOrFail(parseInt(id), {
            relations: ["sites"]
        }).then(async product => {
            res.send(await scraperController.scrapSteam(product.sites[0].url, product.sites[0].htmlTarget))
        })
    }
}