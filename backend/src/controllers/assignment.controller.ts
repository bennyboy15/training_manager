import { NextFunction, Request, Response } from "express";
import * as assignmentService from "../services/assignment.service";
import { createAssignmentSchema, getIdParamsSchema, updateAssignmentSchema } from "../schemas/zodSchemas";

export async function getAssignments(req:Request, res:Response, next:NextFunction){
    try {
        const assignments = await assignmentService.getAssignments();
        return res.status(200).json(assignments);
    } catch (error) {
        next(error);
    }
}

export async function getAssignment(req:Request, res:Response, next:NextFunction){
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const assignment = await assignmentService.getAssignment(id);
        return res.status(200).json(assignment);
    } catch (error) {
        next(error);
    }
}

export async function createAssignment(req:Request, res:Response, next:NextFunction){
    try {
        const data = createAssignmentSchema.parse(req.body);
        const assignment = await assignmentService.createAssignment(data);
        return res.status(201).json(assignment);
    } catch (error) {
        next(error);
    }
}

export async function updateAssignment(req:Request, res:Response, next:NextFunction){
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const data = updateAssignmentSchema.parse(req.body);
        const assignment = await assignmentService.updateAssignment(id, data);
        return res.status(200).json(assignment);
    } catch (error) {
        next(error);
    }
}