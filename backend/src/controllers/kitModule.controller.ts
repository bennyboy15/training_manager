import { NextFunction, Request, Response } from "express";
import * as kitModuleService from "../services/kitModule.service"
import { createKitModuleSchema, getIdParamsSchema } from "../schemas/zodSchemas";

export async function getKitModules(req:Request, res:Response, next:NextFunction){
    try {
        const modules = await kitModuleService.getKitModules();
        return res.status(200).json(modules);
    } catch (error) {
        next(error);
    }
}

export async function getKitModule(req:Request, res:Response, next:NextFunction){
    try {
        const {id} = getIdParamsSchema.parse(req.params);
        const module = await kitModuleService.getKitModule(id);
        return res.status(200).json(module);
    } catch (error) {
        next(error);
    }
}

export async function createKitModule(req:Request, res:Response, next:NextFunction) {
    try {
        const data = createKitModuleSchema.parse(req.body);
        const module = await kitModuleService.createKitModule(data);
        return res.status(201).json(module);
    } catch (error) {
        next(error);
    }
}
