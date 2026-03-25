import { Router } from "express";
import * as kitModuleController from "../controllers/kitModule.controller";
import { protectRoute } from "../middleware/protectRoute";
const router = Router();
router.get("/", protectRoute, kitModuleController.getKitModules);
router.get("/:moduleId", protectRoute, kitModuleController.getKitModule);
router.post("/", protectRoute, kitModuleController.createKitModule);
export default router;
