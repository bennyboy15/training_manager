import { Router} from "express";
import * as employeeController from "../controllers/employee.controller" 
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, employeeController.getEmployees);
router.get("/:id", protectRoute, employeeController.getEmployee);
router.post("/", protectRoute, employeeController.createEmployee);
router.patch("/:id", protectRoute, employeeController.updateEmployee);

export default router;