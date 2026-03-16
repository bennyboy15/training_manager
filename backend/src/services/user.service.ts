import { prisma } from "../../lib/prisma";
import type { CreateUserInput, UpdateUserInput } from "../schemas/zodSchemas";

export async function getUsers() {
  return prisma.user.findMany({
    where : {
      status: "active"
    },
    omit: {
      password: true
    }
  });
}

export async function getUser(id:string) {
  const user = await prisma.user.findUnique({
    where: {id:id},
    omit: {
      password: true
    }
  });
  if (!user) throw new Error("User not found");
  return user;
}

export async function createUser(data: CreateUserInput) {
  return prisma.user.create({
    data: data,
    omit: {
      password: true
    }
  });
}

export async function deleteUser(id:string){
  return prisma.user.update({
    where: {id},
    data: {status:"inactive"},
    omit: {
      password: true
    }
  })
}

export async function updateUser(id:string, data: UpdateUserInput) {
  return prisma.user.update({
    where: {id},
    data: data,
    omit: {
      password: true
    }
  })
}