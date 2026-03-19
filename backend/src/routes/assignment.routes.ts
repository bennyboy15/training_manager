import { Router} from "express";
import * as assignmentController from "../controllers/assignment.controller" 
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, assignmentController.getAssignments);
router.get("/:id", protectRoute, assignmentController.getAssignment);
router.post("/", protectRoute, assignmentController.createAssignment);
router.patch("/:id", protectRoute, assignmentController.updateAssignment);

export default router;