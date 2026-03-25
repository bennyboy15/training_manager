import { prisma } from "../../lib/prisma";
export async function getKits() {
    return prisma.kit.findMany();
}
export async function getKit(id) {
    const kit = prisma.kit.findUnique({
        where: {
            id: id
        }
    });
    if (!kit)
        throw new Error("Kit not found");
    return kit;
}
export async function createKit(data) {
    return prisma.kit.create({
        data: data
    });
}
export async function updateKit(id, data) {
    return prisma.kit.update({
        where: { id: id },
        data: data
    });
}
