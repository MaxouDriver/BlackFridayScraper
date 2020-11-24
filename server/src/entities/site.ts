import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Product } from "./product";

@Entity()
export class Site {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", {
        length: 100
    })
    name: string;

    @Column("text")
    url: string;

    @Column("text")
    htmlTarget: string;

    @Column("int")
    value: number;

    @ManyToOne(product => Product, product => product.sites)
    product: Product;
}