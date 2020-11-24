import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Site } from "./site";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", {
        length: 100
    })
    name: string;

    @Column("text", {
        nullable: true
    })
    description: string;

    @OneToMany(site => Site, site => site.product)
    sites: Site[];
}