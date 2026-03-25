import { prisma } from "../../lib/prisma";
export async function getUsers() {
    return prisma.user.findMany({
        where: {
            status: "active"
        },
        omit: {
            password: true
        }
    });
}
export async function getUser(id) {
    const user = await prisma.user.findUnique({
        where: { id: id },
        omit: {
            password: true
        }
    });
    if (!user)
        throw new Error("User not found");
    return user;
}
export async function createUser(data) {
    return prisma.user.create({
        data: data,
        omit: {
            password: true
        }
    });
}
export async function deleteUser(id) {
    return prisma.user.update({
        where: { id },
        data: { status: "inactive" },
        omit: {
            password: true
        }
    });
}
export async function updateUser(id, data) {
    return prisma.user.update({
        where: { id },
        data: data,
        omit: {
            password: true
        }
    });
}
