import GenerativeAIService from "../services/GenerativeAI.service.js";

async function generateText(req, res) {
  try {
    const text = await GenerativeAIService.generateText();
    res.status(200).json(text);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
export default {
  generateText,
};
