import * as employeeService from "../services/employee.service";
import { createEmployeeSchema, getIdParamsSchema, updateEmployeeSchema } from "../schemas/zodSchemas";
export async function getEmployees(req, res, next) {
    try {
        const employees = await employeeService.getEmployees();
        return res.status(200).json(employees);
    }
    catch (error) {
        next(error);
    }
}
export async function getEmployee(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params.id);
        const employee = await employeeService.getEmployee(id);
        return res.status(200).json(employee);
    }
    catch (error) {
        next(error);
    }
}
export async function createEmployee(req, res, next) {
    try {
        const validatedData = createEmployeeSchema.parse(req.body); // throws error for us, so we can let errorHandler deal with it
        const employee = await employeeService.createEmployee(validatedData);
        res.status(201).json(employee);
    }
    catch (error) {
        next(error);
    }
}
export async function updateEmployee(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params.id);
        const validatedData = updateEmployeeSchema.parse(req.body);
        const employee = await employeeService.updateEmployee(id, validatedData);
        res.status(200).json(employee);
    }
    catch (error) {
        next(error);
    }
}
