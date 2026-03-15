import { prisma } from "../../lib/prisma";
import type { createUserInput, updateUserInput } from "../types/user.types";

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
  return prisma.user.findUnique({
    where: {id:id},
    omit: {
      password: true
    }
  });
}

export async function createUser(data: createUserInput) {
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

export async function updateUser(id:string, data: updateUserInput) {
  return prisma.user.update({
    where: {id},
    data: data,
    omit: {
      password: true
    }
  })
}