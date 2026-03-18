import { z } from "zod";

export const getIdParamsSchema = z.object({
  id: z.string().uuid()
});

export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});
export type CreateUserInput = z.infer<typeof userSchema>;
export type UpdateUserInput = Partial<CreateUserInput>;
export const updateUserSchema = userSchema.partial();

export const employeeSchema = z.object({
  userId: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  department: z.string().optional(),
  jobTitle: z.string().optional(),
  hireDate: z.date().optional()
});
export type CreateEmployeeInput = z.infer<typeof employeeSchema>;
export type UpdateEmployeeInput = Partial<CreateEmployeeInput>;

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
export const updateModuleSchema = moduleSchema.partial();

export const kitSchema = z.object({
  name: z.string().min(1, "Kit name is required"),
  description: z.string().optional()
});
export type CreateKitInput = z.infer<typeof kitSchema>;
export type UpdateKitInput = Partial<CreateKitInput>;
export const updateKitSchema = kitSchema.partial();

export const sessionSchema = z.object({
  location: z.string().optional(),

  startTime: z.coerce.date("Invalid start time"),

  endTime: z.coerce.date("Invalid end time"),

  capacity: z.number().int().positive().optional(),

  moduleId: z.string().uuid("Invalid module ID"),
  trainerId: z.string().uuid("Invalid trainer ID"),
})
.refine((data) => data.endTime > data.startTime, {
  message: "End time must be after start time",
  path: ["endTime"],
});
export type CreateSessionInput = z.infer<typeof sessionSchema>;
export type UpdateSessionInput = Partial<CreateSessionInput>;
export const updateSessionSchema = sessionSchema.partial();