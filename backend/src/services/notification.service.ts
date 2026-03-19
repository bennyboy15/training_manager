import { prisma } from "../../lib/prisma";
import { CreateNotificationInput } from "../schemas/zodSchemas";

export async function getNotifications(){
    return prisma.notification.findMany();
}

export async function getNotification(id:string){
    const notification = await prisma.notification.findUnique({
        where: {id:id}
    });
    if (!notification) throw new Error("Notification not found");
    return notification
}

export async function createNotification(data: CreateNotificationInput) {
    return prisma.notification.create({
        data:data
    })
}

export async function deleteNotification(id:string) {
    return prisma.notification.delete({
        where: {
            id:id
        }
    })
}

