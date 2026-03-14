import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { userSchema } from "../schemas/zodSchemas";

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  res.json(users);
}

export async function createUser(req: Request, res: Response) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: result.error.flatten(),
    });
  }
  const { name, email } = result.data;
  const user = await userService.createUser(name, email);
  res.json(user);
}