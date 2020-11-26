import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Site } from "./site";
import { User } from "./user";

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

    @ManyToOne(user => User, user => user.products, { onDelete: 'CASCADE' })
    user: User;
}