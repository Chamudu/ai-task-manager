const { GoogleGenerativeAI} = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash'});

async function getSuggestion(title) {
    try {
        const prompt = `You are a helpful productivity assistant. 
                        Given this task: "${title}", provide ONE short, 
                        actionable tip (maximum 15 words) to help complete it effectively.
                        Be specific and practical.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const suggestion = response.text().trim();

        return suggestion;
    } catch (error) {
        console.error('Gemini API Error', error.message);
        throw error;
    }
}

module.exports = { getSuggestion };