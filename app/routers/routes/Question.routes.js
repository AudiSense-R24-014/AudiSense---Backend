/**
 * @swagger
 * tags:
 *  name: Question
 *  description: API endpoints for managing questions
 */

import express from 'express';
import QuestionController from '../../controllers/Question.controller.js';
import { verifyToken } from '../../middleware/user.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/question:
 *   get:
 *     summary: Retrieve all questions
 *     tags: [Question]
 *     description: Use to request all questions
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
router.get('/getAll', verifyToken, QuestionController.getAll);

/**
 * @swagger
 * /api/question/{id}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Question]
 *     description: Use to request a question by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       '404':
 *         description: Question not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getOne/:id', verifyToken, QuestionController.getById);

/**
 * @swagger
 * /api/question:
 *   post:
 *     summary: Create a question
 *     tags: [Question]
 *     description: Use to create a question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'  # Update this to match your request body schema
 *     responses:
 *       '201':
 *         description: Question created
 *       '500':
 *         description: Internal server error
 */
router.post('/', verifyToken, QuestionController.create);

/**
 * @swagger
 * /api/question/{id}:
 *   put:
 *     summary: Update a question
 *     tags: [Question]
 *     description: Use to update a question
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'  # Update this to match your request body schema
 *     responses:
 *       '200':
 *         description: Question updated
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', verifyToken, QuestionController.update);

/**
 * @swagger
 * /api/question/{id}:
 *   delete:
 *     summary: Delete a question
 *     tags: [Question]
 *     description: Use to delete a question by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Question deleted
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', verifyToken, QuestionController.remove);

/**
 * @swagger
 * /api/question/activity/{activityId}:
 *   get:
 *     summary: Get questions by activity ID
 *     tags: [Questions]
 *     description: Retrieve questions associated with a specific activity ID
 *     parameters:
 *       - in: path
 *         name: activityId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the activity
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Question'
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Activity not found
 *       '500':
 *         description: Internal server error
 */
router.get('/activity/:activityId', verifyToken, QuestionController.getByActivityId);

export default router;
