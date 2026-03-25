import * as sessionAttendeeService from "../services/sessionAttendee.service";
import { createSessionAttendeeSchema } from "../schemas/zodSchemas";
export async function getSessionAttendees(req, res, next) {
    try {
        const { sessionId } = req.params;
        const attendees = await sessionAttendeeService.getSessionAttendees(sessionId);
        return res.status(200).json(attendees);
    }
    catch (error) {
        next(error);
    }
}
export async function getSessionAttendee(req, res, next) {
    try {
        const { sessionId, attendeeId } = req.params;
        const attendee = await sessionAttendeeService.getSessionAttendee(sessionId, attendeeId);
        return res.status(200).json(attendee);
    }
    catch (error) {
        next(error);
    }
}
export async function createSessionAttendee(req, res, next) {
    try {
        const { sessionId } = req.params;
        const data = createSessionAttendeeSchema.parse(req.body);
        const attendee = await sessionAttendeeService.createSessionAttendee(sessionId, data);
        return res.status(201).json(attendee);
    }
    catch (error) {
        next(error);
    }
}
export async function deleteSessionAttendee(req, res, next) {
    try {
        const { sessionId, attendeeId } = req.params;
        await sessionAttendeeService.deleteSessionAttendee(sessionId, attendeeId);
        return res.sendStatus(204);
    }
    catch (error) {
        next(error);
    }
}
