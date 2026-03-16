import { prisma } from "../../lib/prisma";
import type { CreateEmployeeInput, UpdateEmployeeInput } from "../schemas/zodSchemas";

export async function getEmployees(){
    return prisma.employee.findMany();
}

export async function getEmployee(id:string){
    const employee = await prisma.employee.findUnique({
        where: {userId:id}
    });
    if (!employee) throw new Error("Employee not found");
    return employee
}

export async function createEmployee(data: CreateEmployeeInput) {
    return prisma.employee.create({
        data:data
    })
}

export async function updateEmployee(id:string, data: UpdateEmployeeInput){
    return prisma.employee.update({
        where: {userId:id},
        data: data
    })
}
