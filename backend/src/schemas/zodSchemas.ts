import { z } from "zod";

/* =========================
   ID PARAMS VALIDATION
========================= */
export const getIdParamsSchema = z.object({
  id: z.string().uuid("Invalid ID"),
});

/* =========================
   ENUMS (sync with Prisma)
========================= */
/*
export const userRoleSchema = z.nativeEnum(UserRole);
export const trainingTypeSchema = z.nativeEnum(TrainingType);
export const assignmentStatusSchema = z.nativeEnum(AssignmentStatus);
export const attendanceStatusSchema = z.nativeEnum(AttendanceStatus);
export const resourceTypeSchema = z.nativeEnum(ResourceType);
*/

/* =========================
   AUTH USER
========================= */
export const signupSchema = z.object({
    name: z.string().min(2, "Name too short"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

/* =========================
   USER
========================= */

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().optional()
});
export const updateUserSchema = createUserSchema.partial();
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = Partial<CreateUserInput>;

/* =========================
   EMPLOYEE
========================= */

export const createEmployeeSchema = z.object({
  userId: z.string().uuid().optional(),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  department: z.string().optional(),
  jobTitle: z.string().optional(),
  hireDate: z.coerce.date().optional()
});

export const updateEmployeeSchema = createEmployeeSchema.partial();
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = Partial<CreateEmployeeInput>;

/* =========================
   MODULE
========================= */

export const createModuleSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  durationMinutes: z.number().int().positive().optional(),
  trainingType: z.string().optional(),
  expiryMonths: z.number().int().positive().optional(),
  createdById: z.string().uuid()
});
export const updateModuleSchema = createModuleSchema.partial();
export type CreateModuleInput = z.infer<typeof createModuleSchema>;
export type UpdateModuleInput = Partial<CreateModuleInput>;

/* =========================
   KIT
========================= */

export const createKitSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  description: z.string().optional(),
  createdById: z.string().uuid()
});
export const updateKitSchema = createKitSchema.partial();
export type CreateKitInput = z.infer<typeof createKitSchema>;
export type UpdateKitInput = Partial<CreateKitInput>;

/* =========================
   KIT MODULE (JOIN)
========================= */

export const createKitModuleSchema = z.object({
  kitId: z.string().uuid(),
  moduleId: z.string().uuid()
});
export type CreateKitModuleInput = z.infer<typeof createKitModuleSchema>;

/* =========================
   ASSIGNMENT
========================= */

export const createAssignmentSchema = z.object({
  dueDate: z.coerce.date().optional(),
  status: z.string().optional(),
  employeeId: z.string().uuid(),
  moduleId: z.string().uuid(),
  assignedById: z.string().uuid()
});
export const updateAssignmentSchema = createAssignmentSchema.partial();
export type CreateAssignmentInput = z.infer<typeof createAssignmentSchema>;
export type UpdateAssignmentInput = Partial<CreateAssignmentInput>;

/* =========================
   SESSION
========================= */

export const createSessionSchema = z.object({
  location: z.string().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  capacity: z.number().int().positive().optional(),
  moduleId: z.string().uuid(),
  trainerId: z.string().uuid()
}).refine((data) => data.endTime > data.startTime, {
  message: "End time must be after start time",
  path: ["endTime"]
});
export const updateSessionSchema = createSessionSchema.partial();
export type CreateSessionInput = z.infer<typeof createSessionSchema>;
export type UpdateSessionInput = Partial<CreateSessionInput>;

/* =========================
   SESSION ATTENDEE
========================= */

export const createSessionAttendeeSchema = z.object({
  sessionId: z.string().uuid(),
  employeeId: z.string().uuid(),
  attendanceStatus: z.string().optional(),
});
export type CreateSessionAttendeeInput = z.infer<typeof createSessionAttendeeSchema>;

/* =========================
   TRAINING RECORD
========================= */

export const createTrainingRecordSchema = z.object({
  completedAt: z.coerce.date(),
  expiryDate: z.coerce.date().optional(),
  certificateUrl: z.string().url().optional(),
  employeeId: z.string().uuid(),
  moduleId: z.string().uuid()
});
export type CreateTrainingRecordInput = z.infer<typeof createTrainingRecordSchema>;
export type UpdateTrainingRecordInput = Partial<CreateTrainingRecordInput>;

/* =========================
   MODULE RESOURCE
========================= */

export const createModuleResourceSchema = z.object({
  resourceType: z.string().optional(),
  fileUrl: z.string().url(),
  moduleId: z.string().uuid()
});
export type CreateModuleResourceInput = z.infer<typeof createModuleResourceSchema>;
export type UpdateModuleResourceInput = Partial<CreateModuleResourceInput>;

/* =========================
   NOTIFICATION
========================= */

export const createNotificationSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
  userId: z.string().uuid()
});
export type CreateNotificationInput = z.infer<typeof createNotificationSchema>;
export type UpdateNotificationInput = Partial<CreateNotificationInput>;

/* =========================
   AUDIT LOG
========================= */

export const createAuditLogSchema = z.object({
  action: z.string(),
  entityType: z.string(),
  entityId: z.string(),
  userId: z.string().uuid()
});
export type CreateAuditLogInput = z.infer<typeof createAuditLogSchema>;
export type UpdateAuditLogInput = Partial<CreateAuditLogInput>;