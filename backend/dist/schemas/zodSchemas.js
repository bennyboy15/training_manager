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
/* =========================
   KIT
========================= */
export const createKitSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    description: z.string().optional(),
    createdById: z.string().uuid()
});
export const updateKitSchema = createKitSchema.partial();
/* =========================
   KIT MODULE (JOIN)
========================= */
export const createKitModuleSchema = z.object({
    kitId: z.string().uuid(),
    moduleId: z.string().uuid()
});
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
/* =========================
   SESSION
========================= */
const createSessionBaseSchema = z.object({
    location: z.string().optional(),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    capacity: z.number().int().positive().optional(),
    moduleId: z.string().uuid(),
    trainerId: z.string().uuid()
});
// Important: Zod v4 disallows calling `.partial()` on a schema that already has refinements.
// So we refine the "create" schema, and apply a conditional refinement to the "update" schema instead.
export const createSessionSchema = createSessionBaseSchema.refine((data) => data.endTime > data.startTime, {
    message: "End time must be after start time",
    path: ["endTime"],
});
export const updateSessionSchema = createSessionBaseSchema
    .partial()
    .superRefine((data, ctx) => {
    // Only enforce the ordering rule when both fields are present.
    if (data.startTime && data.endTime && data.endTime <= data.startTime) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "End time must be after start time",
            path: ["endTime"],
        });
    }
});
/* =========================
   SESSION ATTENDEE
========================= */
export const createSessionAttendeeSchema = z.object({
    sessionId: z.string().uuid(),
    employeeId: z.string().uuid(),
    attendanceStatus: z.string().optional(),
});
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
/* =========================
   MODULE RESOURCE
========================= */
export const createModuleResourceSchema = z.object({
    resourceType: z.string().optional(),
    fileUrl: z.string().url(),
    moduleId: z.string().uuid()
});
/* =========================
   NOTIFICATION
========================= */
export const createNotificationSchema = z.object({
    title: z.string().min(1),
    message: z.string().min(1),
    userId: z.string().uuid()
});
/* =========================
   AUDIT LOG
========================= */
export const createAuditLogSchema = z.object({
    action: z.string(),
    entityType: z.string(),
    entityId: z.string(),
    userId: z.string().uuid()
});
