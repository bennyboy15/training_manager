import { NextFunction, Request, Response } from "express";
import * as statsService from "../services/stats.service"

export async function getDashboardStats(req: Request, res: Response, next: NextFunction) {
    try {
        const stats = await statsService.getDashboardStats();
        return res.status(200).json(stats);
    } catch (error) {
        next(error);
    }
}
