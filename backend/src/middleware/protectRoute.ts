import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function protectRoute (req: Request, res: Response, next: NextFunction) {
    // 1. Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // 2. Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string; role: string };

        // 3. Attach the user data to the request object
        req.user = {
            id: decoded.userId,
            role: decoded.role
        };

        // 4. Move to the next middleware or controller
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};