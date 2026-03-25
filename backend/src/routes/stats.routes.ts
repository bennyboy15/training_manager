import { Router} from "express";
import * as statsController from "../controllers/stats.controller.js" 
import { protectRoute } from "../middleware/protectRoute.js";

const router = Router();

router.get("/dashboard", protectRoute, statsController.getDashboardStats);

export default router;