import { prisma } from "../../lib/prisma";
import { CreateSessionInput, UpdateSessionInput } from "../schemas/zodSchemas";

export async function getSessions(){    
    return prisma.session.findMany();   
}

export async function getSession(id:string){    
    const session = await prisma.session.findUnique({
        where: {id:id}
    });
    if (!session) throw new Error("Session not found");
    return session;
}

export async function createSession(data:CreateSessionInput){    
    return prisma.session.create({
        data:data
    })
}

export async function updateSession(id:string, data:UpdateSessionInput){    
    return prisma.session.update({
        where: {id:id},
        data:data
    })
}