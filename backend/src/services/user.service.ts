import { prisma } from "../../lib/prisma";

export async function getUsers() {
  return prisma.user.findMany();
}

export async function createUser(name: string, email: string, role:string="User") {
  return prisma.user.create({
    data: { name, email, role }
  });
}