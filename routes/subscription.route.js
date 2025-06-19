import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
  getUserSubscriptions,
  cancelSubscription,
  getUpcomingRenewals,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getAllSubscriptions);
subscriptionRouter.get("/:id", getSubscriptionById);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", authorize, updateSubscription);
subscriptionRouter.delete("/:id", authorize, deleteSubscription);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription);
subscriptionRouter.get("/upcoming-renewals", getUpcomingRenewals);

export default subscriptionRouter;
