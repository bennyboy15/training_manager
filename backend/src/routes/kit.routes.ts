import {Router} from "express";
import * as kitController from "../controllers/kit.controller"

const router = Router();

router.get("/", kitController.getKits);
router.get("/:id", kitController.getKit);
router.post("/", kitController.createKit);
router.patch("/:id", kitController.updateKit);

export default router;