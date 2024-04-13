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
 * /api/child:
 *  get:
 *    tags: [Patients]
 *    summary: Use to request all children
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/getAll', verifyToken, PatientController.getAll);

/**
 * @swagger
 * /api/child/{id}:
 *  get:
 *    summary: Get a child by ID
 *    tags: [Patients]
 *    description: Use to request a child by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the child to retrieve
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Child'
 *      '404':
 *        description: Child not found
 *      '500':
 *        description: Internal server error
 */
router.get('/getOne/:id', verifyToken, PatientController.getById);

/**
 * @swagger
 * /api/child/{id}:
 *  put:
 *    summary: Update a child by ID
 *    tags: [Patients]
 *    description: Use to update a child by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the child to update
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
 *        description: Child not found
 *      '500':
 *        description: Internal server error
 */
router.put('/:id', verifyToken, PatientController.update);

/**
 * @swagger
 * /api/child/{id}:
 *  delete:
 *    summary: Delete a child by ID
 *    tags: [Patients]
 *    description: Use to delete a child by their ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The ID of the child to delete
 *    responses:
 *      '200':
 *        description: Successful response
 *      '404':
 *        description: Child not found
 *      '500':
 *        description: Internal server error
 */
router.delete('/:id', verifyToken, PatientController.remove);

/**
 * @swagger
 * /api/child:
 *  post:
 *    summary: Create a new child
 *    tags: [Patients]
 *    description: Use to create a new child
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
 *        description: Child created
 *      '500':
 *        description: Internal server error
 */
router.post('/', PatientController.create);

/**
 * @swagger
 * /api/child/login:
 *  post:
 *    summary: Login a child
 *    tags: [Patients]
 *    description: Use to login a child
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
