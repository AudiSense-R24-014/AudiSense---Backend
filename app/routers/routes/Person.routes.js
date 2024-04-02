import express from 'express'
import PersonController from '../../controllers/Person.controller.js'

const router = express.Router()

/**
 * @swagger
 * /api/person:
 *  get:
 *    description: Use to request all persons
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', PersonController.getAll)

/**
 * @swagger
 * /api/person/{id}:
 *   get:
 *     summary: Get a person by ID
 *     description: Use to request a person by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the person to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *       '404':
 *         description: Person not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', PersonController.getById)

/**
 * @swagger
 * /api/person:
 *   post:
 *     summary: Add a new person
 *     description: Use to add a new person with their name, age, and email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the person.
 *               age:
 *                 type: integer
 *                 description: The age of the person.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the person.
 *     responses:
 *       '201':
 *         description: Successfully created
 *       '400':
 *         description: Invalid request
 */
router.post('/', PersonController.create)

/**
 * @swagger
 * /api/person/{id}:
 *   put:
 *     summary: Update a person
 *     description: Use to update an existing person's information by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the person to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the person (optional).
 *               age:
 *                 type: integer
 *                 description: The updated age of the person (optional).
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email address of the person (optional).
 *     responses:
 *       '200':
 *         description: Successfully updated
 *       '400':
 *         description: Invalid request
 *       '404':
 *         description: Person not found
 */
router.put('/:id', PersonController.update)

/**
 * @swagger
 * /api/person/{id}:
 *   delete:
 *     summary: Remove a person
 *     description: Use to remove an existing person from the system by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the person to remove
 *     responses:
 *       '204':
 *         description: Successfully removed
 *       '404':
 *         description: Person not found
 */
router.delete('/:id', PersonController.remove)

export default router
