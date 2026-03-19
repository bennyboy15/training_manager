import {Router } from "express";
import * as sessionController from "../controllers/session.controller";
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, sessionController.getSessions);
router.get("/:id", protectRoute, sessionController.getSession);
router.post("/", protectRoute, sessionController.createSession);
router.patch("/:id", protectRoute, sessionController.updateSession);

export default router;