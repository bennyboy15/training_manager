import { NextFunction, Request, Response } from "express";
import * as sessionService from "../services/session.service"
import { getIdParamsSchema, createSessionSchema, updateSessionSchema } from "../schemas/zodSchemas";

export async function getSessions(req: Request, res: Response, next: NextFunction) {
    try {
        const sessions = await sessionService.getSessions();
        return res.status(200).json(sessions);
    } catch (error) {
        next(error);
    }
}

export async function getSession(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const session = await sessionService.getSession(id);
        return res.status(200).json(session);
    } catch (error) {
        next(error);
    }
}

export async function createSession(req: Request, res: Response, next: NextFunction) {
    try {
        const data = createSessionSchema.parse(req.body);
        const session = await sessionService.createSession(data);
        return res.status(201).json(session);
    } catch (error) {
        next(error);
    }
}

export async function updateSession(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const data = updateSessionSchema.parse(req.body);
        const session = await sessionService.updateSession(id, data);
        return res.status(200).json(session);
    } catch (error) {
        next(error);
    }
}