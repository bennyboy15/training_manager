export type createUserInput = {
  name:string;
  email:string;
  role?:string; // TODO: update this to prisma schema enum UserRole
}

export type updateUserInput = {
  name?:string;
  email?:string;
  role?:string; // TODO: update this to prisma schema enum UserRole
}