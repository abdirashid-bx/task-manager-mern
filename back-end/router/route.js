import e from "express"
import {getalltask,getspeciftask,posttask ,updatetask , deletetask } from "../contorols/controls.js"

 export const router = e.Router();

router.get("/task", getalltask);           // Get all tasks
router.post("/task", posttask);            // Create new task
router.get("/task/:id", getspeciftask);    // Get specific task by ID
router.patch("/task/:id", updatetask);     // Update task by ID
router.delete("/task/:id", deletetask);

export default router 