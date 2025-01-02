require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: " gemini-1.5-flash"});

const prompt = "How does ai work?";
const result = await model.generateContent(prompt);
console.log(result.response.text);