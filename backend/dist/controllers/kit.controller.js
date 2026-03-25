import * as kitService from "../services/kit.service";
import { getIdParamsSchema, createKitSchema, updateKitSchema } from "../schemas/zodSchemas";
export async function getKits(req, res, next) {
    try {
        const kits = await kitService.getKits();
        return res.status(200).json(kits);
    }
    catch (error) {
        next(error);
    }
}
export async function getKit(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const kit = await kitService.getKit(id);
        return res.status(200).json(kit);
    }
    catch (error) {
        next(error);
    }
}
export async function createKit(req, res, next) {
    try {
        const data = createKitSchema.parse(req.body);
        const kit = await kitService.createKit(data);
        return res.status(201).json(kit);
    }
    catch (error) {
        next(error);
    }
}
export async function updateKit(req, res, next) {
    try {
        const { id } = getIdParamsSchema.parse(req.params);
        const data = updateKitSchema.parse(req.body);
        const kit = await kitService.updateKit(id, data);
        return res.status(200).json(kit);
    }
    catch (error) {
        next(error);
    }
}
