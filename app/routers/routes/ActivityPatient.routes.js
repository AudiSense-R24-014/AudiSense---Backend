/**
 * @swagger
 * tags:
 *   name: Activity-Patient
 *   description: Activity-Patient management
 */

import express from 'express';
import ActivityPatientController from '../../controllers/ActivityPatient.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/activity-patient:
 *   get:
 *     summary: Retrieve all activity-patients
 *     tags: [Activity-Patient]
 *     description: Use to request all activity-patients
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', verifyToken, ActivityPatientController.getAll);

/**
 * @swagger
 * /api/activity-patient/{id}:
 *   get:
 *     summary: Get an activity-patient by ID
 *     tags: [Activity-Patient]
 *     description: Use to request an activity-patient by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity-patient to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityPatient'
 *       '404':
 *         description: Activity-patient not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', verifyToken, ActivityPatientController.getById);

/**
 * @swagger
 * /api/activity-patient:
 *   post:
 *     summary: Create an activity-patient
 *     tags: [Activity-Patient]
 *     description: Use to create an activity-patient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActivityPatient'
 *     responses:
 *       '201':
 *         description: Activity-patient created
 */
router.post('/', verifyToken, ActivityPatientController.create);

/**
 * @swagger
 * /api/activity-patient/{id}:
 *   put:
 *     summary: Update an activity-patient
 *     tags: [Activity-Patient]
 *     description: Use to update an activity-patient
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity-patient to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActivityPatient'
 *     responses:
 *       '200':
 *         description: Activity-patient updated
 */
router.put('/:id', verifyToken, ActivityPatientController.update);

/**
 * @swagger
 * /api/activity-patient/{id}:
 *   delete:
 *     summary: Delete an activity-patient
 *     tags: [Activity-Patient]
 *     description: Use to delete an activity-patient
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity-patient to delete
 *     responses:
 *       '200':
 *         description: Activity-patient deleted
 */
router.delete('/:id', verifyToken, ActivityPatientController.remove);

export default router;
