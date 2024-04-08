/**
 * @swagger
 * tags:
 *   name: Therapist
 *   description: Therapist endpoints
 */

import express from 'express'
import TherapistController from '../../controllers/Therapist.controller.js'
import { verifyToken } from '../../middleware/user.middleware.js'

const router = express.Router()

/**
 * @swagger
 * /api/therapist:
 *   get:
 *     tags: [Therapist]
 *     description: Use to request all therapists
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/', verifyToken, TherapistController.getAll)

/**
 * @swagger
 * /api/therapist/{id}:
 *   get:
 *     summary: Get a therapist by ID
 *     tags: [Therapist]
 *     description: Use to request a therapist by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the therapist to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Therapist'
 *       '404':
 *         description: Therapist not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', verifyToken, TherapistController.getById)

/**
 * @swagger
 * /api/therapist/{id}:
 *   put:
 *     summary: Update a therapist by ID
 *     tags: [Therapist]
 *     description: Use to update a therapist by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the therapist to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fName:
 *                 type: string
 *                 description: The first name of the therapist.
 *               lName:
 *                 type: string
 *                 description: The last name of the therapist.
 *               email:
 *                 type: string
 *                 description: The email of the therapist.
 *               contactNo:
 *                 type: string
 *                 description: The contact number of the therapist.
 *               password:
 *                 type: string
 *                 description: The password of the therapist.
 */
router.put('/:id', verifyToken, TherapistController.update)

/**
 * @swagger
 * /api/therapist/{id}:
 *   delete:
 *     summary: Delete a therapist by ID
 *     tags: [Therapist]
 *     description: Use to delete a therapist by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the therapist to delete
 */
router.delete('/:id', verifyToken, TherapistController.remove)

/**
 * @swagger
 * /api/therapist:
 *   post:
 *     summary: Add a new therapist
 *     tags: [Therapist]
 *     description: Use to add a new therapist with their first name, last name, email, contact number, and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fName:
 *                 type: string
 *                 description: The first name of the therapist.
 *               lName:
 *                 type: string
 *                 description: The last name of the therapist.
 *               email:
 *                 type: string
 *                 description: The email of the therapist.
 *               contactNo:
 *                 type: string
 *                 description: The contact number of the therapist.
 *               password:
 *                 type: string
 *                 description: The password of the therapist.
 */
router.post('/', TherapistController.create)

/**
 * @swagger
 * /api/therapist/login:
 *   post:
 *     summary: Login a therapist
 *     tags: [Therapist]
 *     description: Use to login a therapist with their email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the therapist.
 *               password:
 *                 type: string
 *                 description: The password of the therapist.
 */
router.post('/login', TherapistController.login)

export default router
