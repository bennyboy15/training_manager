import { prisma } from "../../lib/prisma";
import { CreateAssignmentInput, UpdateAssignmentInput } from "../schemas/zodSchemas";

export async function getAssignments(){
    return prisma.assignment.findMany();
}

export async function getAssignment(id:string){
    const assignment = await prisma.assignment.findUnique({
        where: {
            id:id
        }
    });
    if (!assignment) throw new Error("Assignment not found");
    return assignment;
}

export async function createAssignment(data: CreateAssignmentInput){
    return prisma.assignment.create({
        data:data
    })
}

export async function updateAssignment(id:string, data: UpdateAssignmentInput){
    return prisma.assignment.update({
        where: {id:id},
        data: data
    })
}