import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "./product";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", {
        length: 100
    })
    email: string;

    @Column("character varying", {
        length: 100
    })
    password: string;

    @OneToMany(product => Product, product => product.user)
    products: Product[];
}