import { prisma } from "../../lib/prisma";

export async function getDashboardStats() {
  const [userCount, sessionCount, moduleCount,] = await Promise.all([
    prisma.user.count(),
    prisma.session.count(),
    prisma.module.count()
  ]);

  return {
    userCount: userCount,
    sessionCount: sessionCount,
    moduleCount: moduleCount,
  };
}