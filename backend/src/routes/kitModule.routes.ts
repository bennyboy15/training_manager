import { Router} from "express";
import * as kitModuleController from "../controllers/kitModule.controller" 
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, kitModuleController.getKitModule);
router.get("/:id", protectRoute, kitModuleController.getKitModules);
router.post("/", protectRoute, kitModuleController.createKitModule);

export default router;