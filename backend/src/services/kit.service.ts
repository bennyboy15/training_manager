import { prisma } from "../../lib/prisma";
import { CreateKitInput, UpdateKitInput } from "../schemas/zodSchemas";

export async function getKits(){
    return prisma.kit.findMany();
}

export async function getKit(id:string){
    const kit = prisma.kit.findUnique({
        where: {
            id:id
        }
    });
    if (!kit) throw new Error("Kit not found");
    return kit;
}

export async function createKit(data: CreateKitInput){
    return prisma.kit.create({
        data:data
    })
}

export async function updateKit(id: string, data: UpdateKitInput) {
    return prisma.kit.update({
        where: {id:id},
        data:data
    })
}