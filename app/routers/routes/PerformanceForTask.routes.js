/**
 * @swagger
 * tags:
 *   name: PerformanceForTask
 *   description: The PerformanceForTask managing API
 */

import express from "express";
import PerformanceForTaskController from "../../controllers/PerformanceForTask.controller.js";
import { verifyToken } from "../../middleware/user.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/performance-for-task:
 *   get:
 *     summary: Retrieve all performance-for-tasks
 *     tags: [PerformanceForTask]
 *     description: Use to request all performance-for-tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PerformanceForTask'
 */
router.get("/", verifyToken, PerformanceForTaskController.getAll);

/**
 * @swagger
 * /api/performance-for-task/{id}:
 *   get:
 *     summary: Get a performance-for-task by ID
 *     tags: [PerformanceForTask]
 *     description: Use to request a performance-for-task by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the performance-for-task to retrieve
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PerformanceForTask'
 *       '404':
 *         description: Performance-for-task not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", verifyToken, PerformanceForTaskController.getById);

/**
 * @swagger
 * /api/performance-for-task:
 *   post:
 *     summary: Create a performance-for-task
 *     tags: [PerformanceForTask]
 *     description: Use to create a performance-for-task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PerformanceForTask'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '201':
 *         description: Performance-for-task created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PerformanceForTask'
 *       '500':
 *         description: Internal server error
 */
router.post("/", verifyToken, PerformanceForTaskController.create);

/**
 * @swagger
 * /api/performance-for-task/{id}:
 *   put:
 *     summary: Update a performance-for-task
 *     tags: [PerformanceForTask]
 *     description: Use to update a performance-for-task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the performance-for-task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PerformanceForTask'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Performance-for-task updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PerformanceForTask'
 *       '500':
 *         description: Internal server error
 */
router.put("/:id", verifyToken, PerformanceForTaskController.update);

/**
 * @swagger
 * /api/performance-for-task/{id}:
 *   delete:
 *     summary: Delete a performance-for-task
 *     tags: [PerformanceForTask]
 *     description: Use to delete a performance-for-task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the performance-for-task to delete
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '204':
 *         description: Performance-for-task deleted
 *       '404':
 *         description: Performance-for-task not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", verifyToken, PerformanceForTaskController.remove);

export default router;
