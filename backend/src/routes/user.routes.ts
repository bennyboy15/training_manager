import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { protectRoute } from "../lib/protectRoute";

const router = Router();

router.get("/", protectRoute, userController.getUsers);
router.get("/:id", protectRoute, userController.getUser);
router.post("/", protectRoute, userController.createUser);
router.patch("/:id", protectRoute, userController.updateUser);

export default router;