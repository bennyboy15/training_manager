import { Router} from "express";
import * as notificationController from "../controllers/notification.controller"
import { protectRoute } from "../middleware/protectRoute";

const router = Router();

router.get("/", protectRoute, notificationController.getNotifications);
router.get("/:id", protectRoute, notificationController.getNotification);
router.post("/", protectRoute, notificationController.createNotification);
router.delete("/:id", protectRoute, notificationController.deleteNotification);

export default router;