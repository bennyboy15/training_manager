import {Router} from "express";
import * as kitController from "../controllers/kit.controller"
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, kitController.getKits);
router.get("/:id", protectRoute, kitController.getKit);
router.post("/", protectRoute, kitController.createKit);
router.patch("/:id", protectRoute, kitController.updateKit);

export default router;