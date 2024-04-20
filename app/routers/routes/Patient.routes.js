/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: Patients endpoints
 */


import express from 'express';
import PatientController from '../../controllers/Patient.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/patient/getAll:
 *  get:
 *    tags: [Patients]
 *    summary: Use to request all patientren
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/getAll', verifyToken, PatientController.getAll);

/**
 * @swagger
 * /api/patient/getOne/{id}:
 *  get:
 *    summary: Get a patient by ID
 *    tags: [Patients]
 *    description: Use to request a patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the patient to retrieve
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/patient'
 *      '404':
 *        description: patient not found
 *      '500':
 *        description: Internal server error
 */
router.get('/getOne/:id', verifyToken, PatientController.getById);

/**
 * @swagger
 * /api/patient/{id}:
 *  put:
 *    summary: Update a patient by ID
 *    tags: [Patients]
 *    description: Use to update a patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the patient to update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fname:
 *                type: string
 *              lname:
 *                type: string
 *              email:
 *                type: string
 *              contactno:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              fname: John
 *              lname: Doe
 *              email: 
 *              contactno:
 *              password:
 *    responses:
 *      '200':
 *        description: Successful response
 *      '404':
 *        description: patient not found
 *      '500':
 *        description: Internal server error
 */
router.put('/:id', verifyToken, PatientController.update);

/**
 * @swagger
 * /api/patient/{id}:
 *  delete:
 *    summary: Delete a patient by ID
 *    tags: [Patients]
 *    description: Use to delete a patient by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the patient to delete
 *    responses:
 *      '200':
 *        description: Successful response
 *      '404':
 *        description: patient not found
 *      '500':
 *        description: Internal server error
 */
router.delete('/:id', verifyToken, PatientController.remove);

/**
 * @swagger
 * /api/patient:
 *  post:
 *    summary: Create a new patient
 *    tags: [Patients]
 *    description: Use to create a new patient
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fname:
 *                type: string
 *              lname:
 *                type: string
 *              email:
 *                type: string
 *              contactno:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              fname: John
 *              lname: Doe
 *              email:
 *              contactno:
 *              password:
 *    responses:
 *      '201':
 *        description: patient created
 *      '500':
 *        description: Internal server error
 */
router.post('/', PatientController.create);

/**
 * @swagger
 * /api/patient/login:
 *  post:
 *    summary: Login a patient
 *    tags: [Patients]
 *    description: Use to login a patient
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              email:
 *              password:
 *    responses:
 *      '200':
 *        description: Successful response
 *      '401':
 *        description: Unauthorized
 *      '500':
 *        description: Internal server error
 */
router.post('/login', PatientController.login);

/**
 * @swagger
 * /api/patient/getTherapistByPatientId/{id}:
 *   get:
 *     summary: Get therapist by patient ID
 *     tags: [Patients]
 *     description: Retrieve the therapist associated with a specific patient ID
 *     parameters:
 *       - in: path
 *         name: id
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
 *               $ref: '#/components/schemas/Therapist'
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.get('/getTherapistByPatientId/:id', verifyToken, PatientController.getTherapistByPatientId);

/**
 * @swagger
 * /api/patient/getByTherapistId/{id}:
 *   get:
 *     summary: Get patients by therapist ID
 *     tags: [Patients]
 *     description: Retrieve patients associated with a specific therapist ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the therapist
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.get('/getByTherapistId/:id', verifyToken, PatientController.getPatientByTherapistId);

export default router;
