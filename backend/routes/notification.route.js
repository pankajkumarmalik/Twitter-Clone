import exprexx from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  deleteNotifications,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = exprexx.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);

//Delete one notification
//router.delete("/:id", protectRoute, deleteOneNotifications);

export default router;
