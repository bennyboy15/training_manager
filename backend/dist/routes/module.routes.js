import { Router } from "express";
import * as moduleController from "../controllers/module.controller";
import { protectRoute } from "../middleware/protectRoute";
const router = Router();
router.get("/", protectRoute, moduleController.getModules);
router.get("/:id", protectRoute, moduleController.getModule);
router.post("/", protectRoute, moduleController.getModules);
router.patch("/:id", protectRoute, moduleController.getModules);
export default router;
