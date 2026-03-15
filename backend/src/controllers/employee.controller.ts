import { NextFunction, Request, Response } from "express";
import * as employeeService from "../services/employee.service";
import { employeeSchema, getIdParamsSchema } from "../schemas/zodSchemas";

export async function getEmployees(req: Request, res: Response, next:NextFunction) {
    try {
        const employees = await employeeService.getEmployees();
        return res.json(employees);
    } catch (error) {
        next(error)
    }
}

export async function getEmployee(req: Request, res: Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params.id);
        const employee = await employeeService.getEmployee(id);
        return res.json(employee);
    } catch (error) {
        next(error)
    }
}

export async function createEmployee(req:Request, res:Response, next:NextFunction) {
    try {
        const validatedData = employeeSchema.parse(req.body); // throws error for us, so we can let errorHandler deal with it
        const employee = await employeeService.createEmployee(validatedData);
        res.json(employee);
    } catch (error) {
        next(error)
    }
}

const updateEmployeeSchema = employeeSchema.partial();
export async function updateEmployee(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params.id);
        const validatedData = updateEmployeeSchema.parse(req.body);
        const employee = await employeeService.updateEmployee(id,validatedData);
        res.json(employee);
    } catch (error) {
        next(error)
    }
}