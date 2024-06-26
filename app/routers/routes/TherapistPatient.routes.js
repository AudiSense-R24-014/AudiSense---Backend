/**
 * @swagger
 * tags:
 *   name: Therapist-Patient
 *   description: Therapist-Patient endpoints
 */

import express from 'express';
import TherapistPatientController from '../../controllers/TherapistPatient.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/** 
 * @swagger
 * /api/therapist-patient:
 *  get:
 *    summary: Retrieve all therapist-patients
 *    tags: [Therapist-Patient]
 *    description: Use to request all therapist-patients
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', verifyToken, TherapistPatientController.getAll);

/**
 * @swagger
 * /api/therapist-patient/{id}:
 *  get:
 *    summary: Get a therapist-patient by ID
 *    tags: [Therapist-Patient]
 *    description: Use to request a therapist-patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the therapist-patient to retrieve
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TherapistPatient'
 *      '404':
 *        description: Therapist-patient not found
 *      '500':
 *        description: Internal server error
 */
router.get('/:id', verifyToken, TherapistPatientController.getById);

/**
 * @swagger
 * /api/therapist-patient:
 *  post:
 *    summary: Create a therapist-patient
 *    tags: [Therapist-Patient]
 *    description: Use to create a therapist-patient
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TherapistPatient'
 *    responses:
 *      '201':
 *        description: Therapist-patient created
 *      '500':
 *        description: Internal server error
 */
router.post('/', verifyToken, TherapistPatientController.create);

/**
 * @swagger
 * /api/therapist-patient/{id}:
 *  put:
 *    summary: Update a therapist-patient by ID
 *    tags: [Therapist-Patient]
 *    description: Use to update a therapist-patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the therapist-patient to update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TherapistPatient'
 *    responses:
 *      '200':
 *        description: Therapist-patient updated
 *      '500':
 *        description: Internal server error
 */
router.put('/:id', verifyToken, TherapistPatientController.update);

/**
 * @swagger
 * /api/therapist-patient/{id}:
 *  delete:
 *    summary: Delete a therapist-patient by ID
 *    tags: [Therapist-Patient]
 *    description: Use to delete a therapist-patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the therapist-patient to delete
 *    responses:
 *      '200':
 *        description: Therapist-patient deleted
 *      '500':
 *        description: Internal server error
 */
router.delete('/:id', verifyToken, TherapistPatientController.remove);

export default router;
