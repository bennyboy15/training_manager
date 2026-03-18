import { Router} from "express";
import * as kitModuleController from "../controllers/kitModule.controller" 

const router = Router();

router.get("/", kitModuleController.getKitModule);
router.get("/:id", kitModuleController.getKitModules);
router.post("/", kitModuleController.createKitModule);

export default router;