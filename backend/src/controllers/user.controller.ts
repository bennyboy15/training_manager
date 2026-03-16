import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";
import { userSchema, getIdParamsSchema, updateUserSchema } from "../schemas/zodSchemas";

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = getIdParamsSchema.parse(req.params);
    const user = await userService.getUser(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const result = userSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: result.error.flatten(),
      });
    }
    const { name, email } = result.data;
    const user = await userService.createUser({ name, email });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = getIdParamsSchema.parse(req.params);
    const data = updateUserSchema.parse(req.body);
    const user = await userService.updateUser(id, data);
    return res.json(user);
  } catch (error) {
    next(error);
  }
}