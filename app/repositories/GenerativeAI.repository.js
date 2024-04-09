import openai from 'openai';

const openaiInstance = new openai({
  apiKey: process.env.OPENAI_API_KEY,
});

const runPrompt = async () => {
  const prompt = "Translate the following English text to French: 'Hello, how are you?'";
  const response = await openaiInstance.completions.create({
    engine: "text-davinci",
    prompt: prompt,
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    temperature: 0.5,
  });
  return response.data.choices[0].text;
};

export default {
  runPrompt,
};
