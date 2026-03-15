// TODO: replace with prisma generated type for safety
export type createEmployeeInput = {
  userId?: string;
  firstName: string;
  lastName: string;
  department?: string;
  jobTitle?: string;
  hireDate?: Date;
}

export type updateEmployeeInput = {
  userId?: string;
  firstName?: string;
  lastName?: string;
  department?: string;
  jobTitle?: string;
  hireDate?: Date;
}