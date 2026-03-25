import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authLimiter } from "../middleware/rateLimiter";
const router = Router();
router.post("/signup", authController.signup);
router.post("/login", authLimiter, authController.login);
//router.post("/logout", authController.logout);
export default router;
