import { prisma } from "../../lib/prisma";
import { CreateSessionAttendeeInput, UpdateSessionAttendeeInput } from "../schemas/zodSchemas";

export async function getSessionAttendees(){
    return prisma.sessionAttendee.findMany();
}

export async function getSessionAttendee(id:string){
    const sessionAttendee = await prisma.sessionAttendee.findUnique({
        where: {id:id}
    });
    if (!sessionAttendee) throw new Error("Session Attendee not found");
    return sessionAttendee
}

export async function createSessionAttendee(data: CreateSessionAttendeeInput) {
    return prisma.sessionAttendee.create({
        data:data
    })
}

export async function deleteSessionAttendee(id:string){
    return prisma.sessionAttendee.delete({
        where: {id:id}
    })
}


