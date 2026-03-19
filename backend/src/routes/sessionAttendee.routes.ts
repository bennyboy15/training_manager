import {Router } from "express";
import * as sessionAttendeeController from "../controllers/sessionAttendee.controller";
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, sessionAttendeeController.getSessionAttendees);
router.get("/:id", protectRoute, sessionAttendeeController.getSessionAttendee);
router.post("/", protectRoute, sessionAttendeeController.createSessionAttendee);
router.delete("/:id", protectRoute, sessionAttendeeController.deleteSessionAttendee);

export default router;