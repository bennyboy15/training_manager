import { prisma } from "../../lib/prisma";
import type { updateUserData } from "../types/user.types";

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

export async function createUser(name: string, email: string, role:string="EMPLOYEE") {
  return prisma.user.create({
    data: { name, email, role },
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

export async function updateUser(id:string, data: updateUserData) {
  return prisma.user.update({
    where: {id},
    data: data,
    omit: {
      password: true
    }
  })
}