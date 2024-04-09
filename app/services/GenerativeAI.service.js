import GenerativeAIRepository from "../repositories/GenerativeAI.repository.js";

async function generateText() {
  return await GenerativeAIRepository.runPrompt();
}

export default {
  generateText,
};
