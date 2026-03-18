import {Router } from "express";
import * as sessionController from "../controllers/session.controller";

const router = Router();

router.get("/", sessionController.getSessions);
router.get("/:id", sessionController.getSession);
router.post("/", sessionController.createSession);
router.patch("/:id", sessionController.updateSession);

export default router;