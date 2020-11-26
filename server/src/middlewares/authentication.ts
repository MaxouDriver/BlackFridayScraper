import { Request, Response, NextFunction} from 'express';
import jwt from "jsonwebtoken";

export default (req: any, res: Response, next: NextFunction) => {
    if (req.path === "/auth/login" || req.path === "/auth/register") return next();

    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });
    else {
        try {
            const decoded = jwt.verify(token, 'longer-secret-is-better');
            if (!decoded) return res.status(401).json({ message: "Wrong token" });
            req.user = decoded;
            return next();
        } catch(err) {
            return res.status(401).json({ message: "Authentication failed" });
        }
    }
};