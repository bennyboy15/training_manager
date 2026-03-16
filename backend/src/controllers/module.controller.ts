import { NextFunction, Request, Response } from "express";
import * as moduleService from "../services/module.service"
import { getIdParamsSchema } from "../schemas/zodSchemas";
import { moduleSchema, updateModuleSchema } from "../schemas/zodSchemas";

export async function getModules(req:Request, res:Response, next:NextFunction) {
    try {
        const modules = await moduleService.getModules();
        res.json(modules);
    } catch (error) {
        next(error);
    }
}

export async function getModule(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const module = await moduleService.getModule(id);
        res.json(module);
    } catch (error) {
        next(error);
    }
}

export async function createModule(req:Request, res:Response, next:NextFunction) {
    try {
        const data = moduleSchema.parse(req.body);
        const module = await moduleService.createModule(data);
        res.status(201).json(module);
    } catch (error) {
        next(error);
    }
}

export async function updateModule(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const data = updateModuleSchema.parse(req.body);
        const module = await moduleService.updateModule(id,data);
        res.status(200).json(module);
    } catch (error) {
        next(error);
    }
}