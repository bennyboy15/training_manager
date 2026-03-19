import { NextFunction, Request, Response } from "express";
import * as notificationService from "../services/notification.service"
import { createNotificationSchema, getIdParamsSchema } from "../schemas/zodSchemas";

export async function getNotifications(req:Request, res:Response, next:NextFunction) {
    try {
        const notifications = await notificationService.getNotifications();
        return res.status(200).json(notifications);
    } catch (error) {
        next(error);
    }
}

export async function getNotification(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const notification = await notificationService.getNotification(id);
        return res.status(200).json(notification);
    } catch (error) {
        next(error);
    }
}

export async function createNotification(req:Request, res:Response, next:NextFunction) {
    try {
        const data = createNotificationSchema.parse(req.body);
        const notification = await notificationService.createNotification(data);
        return res.status(201).json(notification);
    } catch (error) {
        next(error);
    }
}

export async function deleteNotification(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        await notificationService.deleteNotification(id);
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
