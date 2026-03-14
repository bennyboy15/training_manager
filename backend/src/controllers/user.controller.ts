import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  res.json(users);
}

export async function createUser(req: Request, res: Response) {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.json(user);
}