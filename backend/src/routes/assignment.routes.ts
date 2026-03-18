import { Router} from "express";
import * as assignmentController from "../controllers/assignment.controller" 

const router = Router();

router.get("/", assignmentController.getAssignments);
router.get("/:id", assignmentController.getAssignment);
router.post("/", assignmentController.createAssignment);
router.patch("/:id", assignmentController.updateAssignment);

export default router;