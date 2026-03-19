import { Router} from "express";
import * as statsController from "../controllers/stats.controller" 
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/dashboard", protectRoute, statsController.getDashboardStats);

export default router;