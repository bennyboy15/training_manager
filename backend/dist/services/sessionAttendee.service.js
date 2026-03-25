import { prisma } from "../../lib/prisma";
export async function getSessionAttendees(sessionId) {
    return prisma.sessionAttendee.findMany({
        where: {
            sessionId: sessionId
        }
    });
}
export async function getSessionAttendee(sessionId, id) {
    const sessionAttendee = await prisma.sessionAttendee.findFirst({
        where: {
            id: id,
            sessionId: sessionId
        }
    });
    if (!sessionAttendee)
        throw new Error("Session Attendee not found");
    return sessionAttendee;
}
export async function createSessionAttendee(sessionId, data) {
    return prisma.sessionAttendee.create({
        data: {
            ...data,
            sessionId: sessionId
        }
    });
}
export async function deleteSessionAttendee(sessionId, id) {
    const attendee = prisma.sessionAttendee.deleteMany({
        where: {
            id: id,
            sessionId: sessionId
        }
    });
    if (attendee.count === 0)
        throw new Error("Attendee not found in this session");
    return attendee;
}
