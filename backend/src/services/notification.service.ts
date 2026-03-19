import { prisma } from "../../lib/prisma";
import { CreateNotificationInput } from "../schemas/zodSchemas";

export async function getNotifications(userId:string) {
    return prisma.notification.findMany({
        where: {
            userId: userId
        }
    });
}

export async function getNotification(userId:string, id:string) {
    const notification = await prisma.notification.findFirst({
        where: {
            id:id,
            userId:userId
        }
    });
    if (!notification) throw new Error("Notification not found");
    return notification
}

export async function createNotification(userId:string, data: CreateNotificationInput) {
    return prisma.notification.create({
        data: {
            ...data,
            userId:userId
        }
    })
}

export async function deleteNotification(userId:string, id:string) {
    const notification = await prisma.notification.delete({
        where: {
            id:id,
            userId: userId
        }
    });
    if (notification.count === 0) throw new Error("Notification not found or unauthorized");
    return notification;
}

