const { generateSummary } = require('../services/generateSummary');

const summarizerController = async (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== 'string' || text.trim() === '') {
        return res.render('index', { summary: null, error: 'Invalid input: No text provided or input is empty.' });
    }
    
    try {
        const summary = await generateSummary(text);
        res.render('index', { summary, error: null });
    } catch (error) {
        console.error('Error summarizing text:', error.message);
        res.render('index', { summary: null, error: 'An error occurred while summarizing the text. Please try again later.' });
    }
};

module.exports = summarizerController;