import { NextFunction, Request, Response } from "express";
import * as sessionAttendeeService from "../services/sessionAttendee.service"
import { createSessionAttendeeSchema, getIdParamsSchema } from "../schemas/zodSchemas";

export async function getSessionAttendees(req:Request, res:Response, next:NextFunction){
    try {
        const attendees = await sessionAttendeeService.getSessionAttendees();
        return res.status(200).json(attendees);
    } catch (error) {
        next(error);
    }
}

export async function getSessionAttendee(req:Request, res:Response, next:NextFunction){
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const attendee = await sessionAttendeeService.getSessionAttendee(id);
        return res.status(200).json(attendee);
    } catch (error) {
        next(error);
    }
}

export async function createSessionAttendee(req:Request, res:Response, next:NextFunction) {
    try {
        const data = createSessionAttendeeSchema.parse(req.body);
        const attendee = await sessionAttendeeService.createSessionAttendee(data);
        return res.status(201).json(attendee);
    } catch (error) {
        next(error);
    }
}

export async function deleteSessionAttendee(req:Request, res:Response, next:NextFunction){
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        await sessionAttendeeService.deleteSessionAttendee(id);
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}


