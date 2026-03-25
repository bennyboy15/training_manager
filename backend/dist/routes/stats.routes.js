import { Router } from "express";
import * as statsController from "../controllers/stats.controller";
import { protectRoute } from "../middleware/protectRoute";
const router = Router();
router.get("/dashboard", protectRoute, statsController.getDashboardStats);
export default router;
