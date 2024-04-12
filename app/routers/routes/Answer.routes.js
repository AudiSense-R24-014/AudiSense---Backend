/**
 * @swagger
 * tags:
 *   name: Answer
 *   description: API endpoints for managing answers
 */

import express from 'express';
import AnswerController from '../../controllers/Answer.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/answer:
 *   get:
 *     summary: Retrieve all answers
 *     tags: [Answer]
 *     description: Use to request all answers
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
router.get('/', verifyToken, AnswerController.getAll);

/**
 * @swagger
 * /api/answer/{id}:
 *   get:
 *     summary: Get an answer by ID
 *     tags: [Answer]
 *     description: Use to request an answer by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the answer to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Answer'
 *       '404':
 *         description: Answer not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', verifyToken, AnswerController.getById);

/**
 * @swagger
 * /api/answer:
 *   post:
 *     summary: Create an answer
 *     tags: [Answer]
 *     description: Use to create an answer
 *     responses:
 *       '201':
 *         description: Answer created
 *       '500':
 *         description: Internal server error
 */
router.post('/', verifyToken, AnswerController.create);

/**
 * @swagger
 * /api/answer/{id}:
 *   put:
 *     summary: Update an answer
 *     tags: [Answer]
 *     description: Use to update an answer
 *     responses:
 *       '200':
 *         description: Answer updated
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', verifyToken, AnswerController.update);

/**
 * @swagger
 * /api/answer/{id}:
 *   delete:
 *     summary: Delete an answer
 *     tags: [Answer]
 *     description: Use to delete an answer
 *     responses:
 *       '200':
 *         description: Answer deleted
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', verifyToken, AnswerController.remove);

// Define components schema
/**
 * @swagger
 * components:
 *   schemas:
 *     Answer:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the answer
 *         text:
 *           type: string
 *           description: The text of the answer
 *         userId:
 *           type: string
 *           description: The ID of the user who posted the answer
 *       example:
 *         id: abc123
 *         text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *         userId: def456
 */

export default router;
