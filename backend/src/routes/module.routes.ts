import { Router} from "express";
import * as moduleController from "../controllers/module.controller"

const router = Router();

router.get("/", moduleController.getModules);
router.get("/:id", moduleController.getModule);
router.post("/", moduleController.getModules);
router.patch("/:id", moduleController.getModules);

export default router;