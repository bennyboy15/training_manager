export type updateUserData = {
  name?:string;
  email?:string;
  role?:string; // TODO: update this to prisma schema enum UserRole
}