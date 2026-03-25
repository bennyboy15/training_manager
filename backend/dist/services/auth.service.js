import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function signup(data) {
    const { email, password, name } = data;
    // 1. Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
        throw new Error("User already exists");
    // 2. Hash the password
    const passwordHash = await bcrypt.hash(password, 10);
    // 3. Create user in DB
    const user = await prisma.user.create({
        data: {
            email,
            name,
            passwordHash,
        },
    });
    // 4. Return user without the hash
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
export async function login(data) {
    const { email, password } = data;
    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("Invalid credentials");
    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
        throw new Error("Invalid credentials");
    // 3. Generate JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return {
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
    };
}
