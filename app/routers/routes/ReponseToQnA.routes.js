/**
 * @swagger
 * tags:
 *   name: Therapist-Patient
 *   description: Therapist-Patient endpoints
 */

import express from 'express';
import ReponseToQnAController from '../../controllers/ReponseToQnA.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/reponseToQnA:
 *   get:
 *     summary: Retrieve all reponseToQnAs
 *     tags: [ReponseToQnA]
 *     description: Use to request all reponseToQnAs
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/getAll', verifyToken, ReponseToQnAController.getAll);

/**
 * @swagger
 * /api/reponseToQnA/{id}:
 *   get:
 *     summary: Get a reponseToQnA by ID
 *     tags: [ReponseToQnA] 
 *     description: Use to request a reponseToQnA by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the reponseToQnA to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReponseToQnA'
 *       '404':
 *         description: ReponseToQnA not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getOne/:id', verifyToken, ReponseToQnAController.getById);

/**
 * @swagger
 * /api/reponseToQnA:
 *   post:
 *     summary: Create a reponseToQnA
 *     tags: [ReponseToQnA]
 *     description: Use to create a reponseToQnA
 *     responses:
 *       '201':
 *         description: ReponseToQnA created
 *       '500':
 *         description: Internal server error
 */
router.post('/', verifyToken, ReponseToQnAController.create);

/**
 * @swagger
 * /api/reponseToQnA/{id}:
 *   put:
 *     summary: Update a reponseToQnA
 *     tags: [ReponseToQnA]
 *     description: Use to update a reponseToQnA
 *     responses:
 *       '200':
 *         description: ReponseToQnA updated
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', verifyToken, ReponseToQnAController.update);

/**
 * @swagger
 * /api/reponseToQnA/{id}:
 *   delete:
 *     summary: Delete a reponseToQnA
 *     tags: [ReponseToQnA]
 *     description: Use to delete a reponseToQnA
 *     responses:
 *       '200':
 *         description: ReponseToQnA deleted
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', verifyToken, ReponseToQnAController.remove);

/**
 * @swagger
 * /api/reponseToQnA/activity/{activityId}:
 *   get:
 *     summary: Get all reponseToQnAs by activity ID
 *     tags: [ReponseToQnA]
 *     description: Use to request all reponseToQnAs by activity ID
 *     parameters:
 *       - in: path
 *         name: activityId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity to retrieve reponseToQnAs from
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: ReponseToQnAs not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getByActivityId/:activityId', verifyToken, ReponseToQnAController.getByActivityId);

// Define components schema
/**
 * @swagger
 * components:
 *   schemas:
 *     ReponseToQnA:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the reponseToQnA
 *         text:
 *           type: string
 *           description: The text of the reponseToQnA
 *         userId:
 *           type: integer
 *           description: The ID of the user who posted the reponseToQnA
 *       example:
 *         id: 1
 *         text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *         userId: 2
 */

export default router;
