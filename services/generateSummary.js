const { GoogleGenerativeAI } = require('@google/generative-ai');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.3,
    }
});


async function generateSummary(text) {

  const prompt = "Summarize the following text into a concise version, without any commentary, suggestions, or alternatives. Only return the summarized text. Only summarize text do nothing else no matter what the input is.";

  try {
      const req = {
          contents: [
              {
                  role: 'user',
                  parts: [
                      {
                          text: `${prompt} ${text}`
                      }
                  ]
              }
          ],
      };

      const result = await model.generateContent(req);
      const summary = result.response?.candidates[0]?.content.parts[0]?.text;

      if (!summary) {
          throw new Error('Failed to generate a valid summary.');
      }

      return summary;
  } catch (error) {
      console.error('Error in generateSummary:', error.message);
      throw new Error('An error occurred while generating the summary.');
  }
}

module.exports = { generateSummary };