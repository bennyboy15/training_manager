import * as authService from "../services/auth.service.js";
import { loginSchema, signupSchema } from "../schemas/zodSchemas.js";
export async function signup(req, res, next) {
    try {
        const data = signupSchema.parse(req.body);
        const user = await authService.signup(data);
        return res.status(201).json(user);
    }
    catch (error) {
        next(error);
    }
}
export async function login(req, res, next) {
    try {
        const data = loginSchema.parse(req.body);
        const user = await authService.login(data);
        return res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
}
