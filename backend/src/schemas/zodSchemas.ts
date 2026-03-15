import { z } from "zod";

export const getIdParamsSchema = z.object({
  id: z.string().uuid()
});

export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export const employeeSchema = z.object({
  userId: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  department: z.string().optional(),
  jobTitle: z.string().optional(),
  hireDate: z.date().optional()
});