import { Request, Response, NextFunction} from 'express';
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });
    else {
        try {
            const decoded = jwt.verify(token, 'longer-secret-is-better');
            if (!decoded) return res.status(401).json({ message: "Wrong token" });
            next();
        } catch(err) {
            return res.status(401).json({ message: "Authentication failed" });
          }
        
    }
};