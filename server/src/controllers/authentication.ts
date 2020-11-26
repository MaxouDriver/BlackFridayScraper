import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthenticationController { 

    async login(req: Request, res: Response): Promise<any> {
        const {
            email,
            password
        } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
        }

        const user = await getRepository(User).findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "No user found with this email"
            });
        }

        bcrypt.compare(req.body.password, user.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    message: "Authentication failed"
                });
            }

            const jwtToken = this.createToken(user)

            res.status(200).json({
                token: jwtToken
            });
        }).catch(err => {
            return res.status(401).json({
                message: "Authentication failed"
            });
        });
    }

    register(req: Request, res: Response): any {
        const {
            email,
            password
        } = req.body;

        bcrypt.hash(password, 10).then(async (hash) => {
            getRepository(User).save({
                email: email,
                password: hash
            }).then((response) => {
                const jwtToken = this.createToken(response)

                res.status(201).json({
                    message: "User successfully created!",
                    token: jwtToken
                });
            }).catch(error => {
                res.status(500).json({
                    error: error
                });
            });
        });
    }

    private createToken(user: User){
        const jwtToken = jwt.sign({
            email: user.email,
            userId: user.id
        }, "longer-secret-is-better", {
            expiresIn: "12h"
        });

        return jwtToken
    }
}