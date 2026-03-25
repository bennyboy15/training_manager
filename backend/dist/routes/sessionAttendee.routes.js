import { Router } from "express";
import * as sessionAttendeeController from "../controllers/sessionAttendee.controller";
import { protectRoute } from "../middleware/protectRoute";
const router = Router();
router.get("/", protectRoute, sessionAttendeeController.getSessionAttendees);
router.get("/:attendeeId", protectRoute, sessionAttendeeController.getSessionAttendee);
router.post("/", protectRoute, sessionAttendeeController.createSessionAttendee);
router.delete("/:attendeeId", protectRoute, sessionAttendeeController.deleteSessionAttendee);
export default router;
