import { Router} from "express";
import * as notificationController from "../controllers/notification.controller"

const router = Router();

router.get("/", notificationController.getNotifications);
router.get("/:id", notificationController.getNotification);
router.post("/", notificationController.createNotification);
router.delete("/:id", notificationController.deleteNotification);

export default router;