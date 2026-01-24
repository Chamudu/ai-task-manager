const localEngine = require('./suggestionEngine');
const geminiEngine = require('./geminiEngine');

async function generateSuggestion(title, mode = 'local') {
    try {
        if (mode === 'smart') {
            console.log('🧠 Using Smart AI (Gemini)...');
            return await geminiEngine.getSuggestion(title);
        } else {
            console.log('⚡ Using Local Rules...');
            return localEngine.getSuggestion(title);
        }
    } catch (error) {
        console.error('AI failed, falling back to local engine:', error.message)
        return localEngine.getSuggestion(title);
    }
}

module.exports = { generateSuggestion };
