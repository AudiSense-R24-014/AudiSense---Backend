import express from "express";
import GenerativeAIController from "../../controllers/GenerativeAI.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/generativeAI:
 *  get:
 *   summary: Use to generate text
 *  responses:
 *   '200':
 *   description: A successful response
 */
router.get("/", GenerativeAIController.generateText);

export default router;

