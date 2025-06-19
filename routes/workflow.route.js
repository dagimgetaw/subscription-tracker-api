import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

// Endpoint to trigger the workflow handler
workflowRouter.post("/reminders", sendReminders);

export default workflowRouter;
