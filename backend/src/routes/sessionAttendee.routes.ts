import {Router } from "express";
import * as sessionAttendeeController from "../controllers/sessionAttendee.controller";

const router = Router();

router.get("/", sessionAttendeeController.getSessionAttendees);
router.get("/:id", sessionAttendeeController.getSessionAttendee);
router.post("/", sessionAttendeeController.createSessionAttendee);
router.delete("/:id", sessionAttendeeController.deleteSessionAttendee);

export default router;