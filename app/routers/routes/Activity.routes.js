/**
 * @swagger
 * tags:
 *   name: Activity
 *   description: The Activity managing API
 */

import express from 'express';
import ActivityController from '../../controllers/Activity.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/activity:
 *   get:
 *     summary: Retrieve all activities
 *     tags: [Activity]
 *     description: Retrieve a list of all activities
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 */
router.get('/getAll', verifyToken, ActivityController.getAll);

/**
 * @swagger
 * /api/activity/{id}:
 *   get:
 *     summary: Get an activity by ID
 *     tags: [Activity]
 *     description: Retrieve an activity by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       '404':
 *         description: Activity not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getOne/:id', verifyToken, ActivityController.getById);

/**
 * @swagger
 * /api/activity:
 *   post:
 *     summary: Create an activity
 *     tags: [Activity]
 *     description: Create a new activity
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       '201':
 *         description: Activity created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 */
router.post('/', verifyToken, ActivityController.create);

/**
 * @swagger
 * /api/activity/{id}:
 *   put:
 *     summary: Update an activity
 *     tags: [Activity]
 *     description: Update an existing activity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       '200':
 *         description: Activity updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       '404':
 *         description: Activity not found
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', verifyToken, ActivityController.update);

/**
 * @swagger
 * /api/activity/{id}:
 *   delete:
 *     summary: Delete an activity
 *     tags: [Activity]
 *     description: Delete an activity by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity to delete
 *     responses:
 *       '200':
 *         description: Activity deleted successfully
 *       '404':
 *         description: Activity not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', verifyToken, ActivityController.remove);

/**
 * @swagger
 * /api/activity/activityByPatientId/{patientId}:
 *   patch:
 *     summary: Get activities by patient ID
 *     tags: [Activity]
 *     description: Retrieve activities associated with a specific patient ID
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       '404':
 *         description: Patient not found or no activities associated
 *       '500':
 *         description: Internal server error
 */
//

export default router;
