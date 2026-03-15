import { prisma } from "../../lib/prisma";
import type { createEmployeeInput, updateEmployeeInput } from "../types/employee.types.ts";

export async function getEmployees(){
    return prisma.employee.findMany();
}

export async function getEmployee(id:string){
    const employee = await prisma.employee.findUnique({
        where: {userId:id}
    });
    if (!employee) {
        throw new Error("Employee not found");
    }
    return employee
}

export async function createEmployee(data: createEmployeeInput) {
    return prisma.employee.create({
        data:data
    })
}

export async function updateEmployee(id:string, data: updateEmployeeInput){
    return prisma.employee.update({
        where: {userId:id},
        data: data
    })
}
