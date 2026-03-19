import { prisma } from "../../lib/prisma";
import { CreateKitModuleInput } from "../schemas/zodSchemas";

export async function getKitModules(kitId: string){
    return prisma.kitModule.findMany();
}

export async function getKitModule(kitId: string, id:string){
    const kitModule = await prisma.kitModule.findUnique({
        where: {id:id}
    });
    if (!kitModule) throw new Error("Kit module not found");
    return kitModule
}

export async function createKitModule(kitId: string, data: CreateKitModuleInput) {
    return prisma.kitModule.create({
        data: {
            ...data,
            kitId: kitId
        }
    })
}

