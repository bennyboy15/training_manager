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

export const moduleSchema = z.object({
  userId: z.string().uuid(),
  description: z.string().optional(),
  durationMinutes: z.number().positive(),
  trainingType: z.string().optional(),
  expiryMonths: z.number().int().nonnegative(),
  hireDate: z.coerce.date().optional() 
});
export type CreateModuleInput = z.infer<typeof moduleSchema>;
export type UpdateModuleInput = Partial<CreateModuleInput>;