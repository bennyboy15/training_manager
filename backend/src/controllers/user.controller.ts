import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";
import { userSchema } from "../schemas/zodSchemas";

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  res.json(users);
}

type GetUserParams = {
  id: string;
};
export async function getUser(req: Request<GetUserParams>,res:Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    if (!user) return res.status(404).json({message:"User not found"});
    return res.json(user);
  } catch (error) {
    next(error);
  }
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