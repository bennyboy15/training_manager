import * as assignmentService from "../services/assignment.service";
import { createAssignmentSchema, getIdParamsSchema, updateAssignmentSchema } from "../schemas/zodSchemas";
export async function getAssignments(req, res, next) {
    try {
        const assignments = await assignmentService.getAssignments();
        return res.status(200).json(assignments);
    }
    catch (error) {
        next(error);
    }
}
export async function getAssignment(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const assignment = await assignmentService.getAssignment(id);
        return res.status(200).json(assignment);
    }
    catch (error) {
        next(error);
    }
}
export async function createAssignment(req, res, next) {
    try {
        const data = createAssignmentSchema.parse(req.body);
        const assignment = await assignmentService.createAssignment(data);
        return res.status(201).json(assignment);
    }
    catch (error) {
        next(error);
    }
}
export async function updateAssignment(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const data = updateAssignmentSchema.parse(req.body);
        const assignment = await assignmentService.updateAssignment(id, data);
        return res.status(200).json(assignment);
    }
    catch (error) {
        next(error);
    }
}
