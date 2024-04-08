/**
 * @swagger
 * tags:
 *   name: Patient-Hearing-Level
 *   description: API endpoints for managing patient hearing levels
 */

import express from 'express';
import PatientHearingLevelController from '../../controllers/PatientHearingLevel.controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/patient-hearing-level:
 *   get:
 *     summary: Retrieve all patient hearing levels
 *     tags: [Patient-Hearing-Level]
 *     description: Retrieve a list of all patient hearing levels
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', PatientHearingLevelController.getAll);

/**
 * @swagger
 * /api/patient-hearing-level/{id}:
 *   get:
 *     summary: Get a patient hearing level by ID
 *     tags: [Patient-Hearing-Level]
 *     description: Retrieve a patient hearing level by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient hearing level to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PatientHearingLevel'
 *       '404':
 *         description: Patient hearing level not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', PatientHearingLevelController.getById);

/**
 * @swagger
 * /api/patient-hearing-level:
 *   post:
 *     summary: Create a patient hearing level
 *     tags: [Patient-Hearing-Level]
 *     description: Create a new patient hearing level
 *     responses:
 *       '201':
 *         description: Patient hearing level created successfully
 */
router.post('/', PatientHearingLevelController.create);

/**
 * @swagger
 * /api/patient-hearing-level/{id}:
 *   put:
 *     summary: Update a patient hearing level
 *     tags: [Patient-Hearing-Level]
 *     description: Update an existing patient hearing level
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient hearing level to update
 *     responses:
 *       '200':
 *         description: Patient hearing level updated successfully
 *       '404':
 *         description: Patient hearing level not found
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', PatientHearingLevelController.update);

/**
 * @swagger
 * /api/patient-hearing-level/{id}:
 *   delete:
 *     summary: Delete a patient hearing level
 *     tags: [Patient-Hearing-Level]
 *     description: Delete a patient hearing level by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the patient hearing level to delete
 *     responses:
 *       '200':
 *         description: Patient hearing level deleted successfully
 *       '404':
 *         description: Patient hearing level not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', PatientHearingLevelController.remove);

export default router;
