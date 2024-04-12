/**
 * @swagger
 * tags:
 *   name: Patient-Completed-Task
 *   description: The Patient-Completed-Task managing API
 */

import express from "express";
import PatientCompletedTaskController from "../../controllers/PatientCompletedTask.controller.js";
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/patient-completed-task:
 *   get:
 *     summary: Retrieve all patient completed tasks
 *     tags: [Patient-Completed-Task]
 *     description: Use to request all patient completed tasks
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get("/", verifyToken, PatientCompletedTaskController.getAll);

/**
 * @swagger
 * /api/patient-completed-task/{id}:
 *   get:
 *     summary: Get a patient completed task by ID
 *     tags: [Patient-Completed-Task]
 *     description: Use to request a patient completed task by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient completed task to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PatientCompletedTask'
 *       '404':
 *         description: Patient completed task not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", verifyToken, PatientCompletedTaskController.getById);

/**
 * @swagger
 * /api/patient-completed-task:
 *   post:
 *     summary: Create a patient completed task
 *     tags: [Patient-Completed-Task]
 *     description: Use to create a patient completed task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatientCompletedTask'
 *     responses:
 *       '201':
 *         description: Patient completed task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PatientCompletedTask'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post("/", verifyToken, PatientCompletedTaskController.create);

/**
 * @swagger
 * /api/patient-completed-task/{id}:
 *   put:
 *     summary: Update a patient completed task
 *     tags: [Patient-Completed-Task]
 *     description: Use to update a patient completed task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient completed task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatientCompletedTask'
 *     responses:
 *       '200':
 *         description: Patient completed task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PatientCompletedTask'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Patient completed task not found
 *       '500':
 *         description: Internal server error
 */
router.put("/:id", verifyToken, PatientCompletedTaskController.update);

/**
 * @swagger
 * /api/patient-completed-task/{id}:
 *   delete:
 *     summary: Delete a patient completed task
 *     tags: [Patient-Completed-Task]
 *     description: Use to delete a patient completed task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient completed task to delete
 *     responses:
 *       '204':
 *         description: Patient completed task deleted successfully
 *       '404':
 *         description: Patient completed task not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", verifyToken, PatientCompletedTaskController.remove);

export default router;
