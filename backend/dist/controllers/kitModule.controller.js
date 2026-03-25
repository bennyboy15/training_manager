import * as kitModuleService from "../services/kitModule.service";
import { createKitModuleSchema, getIdParamsSchema } from "../schemas/zodSchemas";
export async function getKitModules(req, res, next) {
    try {
        const modules = await kitModuleService.getKitModules();
        return res.status(200).json(modules);
    }
    catch (error) {
        next(error);
    }
}
export async function getKitModule(req, res, next) {
    try {
        const { moduleId } = getIdParamsSchema.parse(req.params);
        const module = await kitModuleService.getKitModule(moduleId);
        return res.status(200).json(module);
    }
    catch (error) {
        next(error);
    }
}
export async function createKitModule(req, res, next) {
    try {
        const data = createKitModuleSchema.parse(req.body);
        const module = await kitModuleService.createKitModule(data);
        return res.status(201).json(module);
    }
    catch (error) {
        next(error);
    }
}
