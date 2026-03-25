import { prisma } from "../../lib/prisma";
export async function getEmployees() {
    return prisma.employee.findMany();
}
export async function getEmployee(id) {
    const employee = await prisma.employee.findUnique({
        where: { userId: id }
    });
    if (!employee)
        throw new Error("Employee not found");
    return employee;
}
export async function createEmployee(data) {
    return prisma.employee.create({
        data: data
    });
}
export async function updateEmployee(id, data) {
    return prisma.employee.update({
        where: { userId: id },
        data: data
    });
}
