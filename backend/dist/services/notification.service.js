import { prisma } from "../../lib/prisma";
export async function getNotifications(userId) {
    return prisma.notification.findMany({
        where: {
            userId: userId
        }
    });
}
export async function getNotification(userId, id) {
    const notification = await prisma.notification.findFirst({
        where: {
            id: id,
            userId: userId
        }
    });
    if (!notification)
        throw new Error("Notification not found");
    return notification;
}
export async function createNotification(userId, data) {
    return prisma.notification.create({
        data: {
            ...data,
            userId: userId
        }
    });
}
export async function deleteNotification(userId, id) {
    const notification = await prisma.notification.delete({
        where: {
            id: id,
            userId: userId
        }
    });
    if (notification.count === 0)
        throw new Error("Notification not found or unauthorized");
    return notification;
}
