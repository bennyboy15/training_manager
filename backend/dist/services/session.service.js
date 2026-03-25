import { prisma } from "../../lib/prisma";
export async function getSessions() {
    return prisma.session.findMany();
}
export async function getSession(id) {
    const session = await prisma.session.findUnique({
        where: { id: id }
    });
    if (!session)
        throw new Error("Session not found");
    return session;
}
export async function createSession(data) {
    return prisma.session.create({
        data: data
    });
}
export async function updateSession(id, data) {
    return prisma.session.update({
        where: { id: id },
        data: data
    });
}
