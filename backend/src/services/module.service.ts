import { prisma } from "../../lib/prisma";
import { CreateModuleInput, UpdateModuleInput } from "../schemas/zodSchemas";

export async function getModules() {
    return prisma.module.findMany();
}

export async function getModule(id: string) {
    const module = await prisma.module.findUnique({
        where: {id}
    });
    if (!module) throw new Error("Module not found");
    return module;
}

export async function createModule(data: CreateModuleInput) {
    return prisma.module.create({
        data:data
    })
}

export async function updateModule(id: string, data: UpdateModuleInput) {
    return prisma.module.update({
        where: {id:id},
        data:data
    })
}