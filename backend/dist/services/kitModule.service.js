import { prisma } from "../../lib/prisma";
export async function getKitModules(kitId) {
    return prisma.kitModule.findMany();
}
export async function getKitModule(kitId, id) {
    const kitModule = await prisma.kitModule.findUnique({
        where: { id: id }
    });
    if (!kitModule)
        throw new Error("Kit module not found");
    return kitModule;
}
export async function createKitModule(kitId, data) {
    return prisma.kitModule.create({
        data: {
            ...data,
            kitId: kitId
        }
    });
}
