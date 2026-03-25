import { prisma } from "../../lib/prisma";
export async function getModules() {
    return prisma.module.findMany();
}
export async function getModule(id) {
    const module = await prisma.module.findUnique({
        where: { id }
    });
    if (!module)
        throw new Error("Module not found");
    return module;
}
export async function createModule(data) {
    return prisma.module.create({
        data: data
    });
}
export async function updateModule(id, data) {
    return prisma.module.update({
        where: { id: id },
        data: data
    });
}
