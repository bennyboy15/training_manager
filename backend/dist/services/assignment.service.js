import { prisma } from "../../lib/prisma";
export async function getAssignments() {
    return prisma.assignment.findMany();
}
export async function getAssignment(id) {
    const assignment = await prisma.assignment.findUnique({
        where: {
            id: id
        }
    });
    if (!assignment)
        throw new Error("Assignment not found");
    return assignment;
}
export async function createAssignment(data) {
    return prisma.assignment.create({
        data: data
    });
}
export async function updateAssignment(id, data) {
    return prisma.assignment.update({
        where: { id: id },
        data: data
    });
}
