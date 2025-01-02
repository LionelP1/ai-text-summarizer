const { generateSummary } = require('../services/generateContent');

const summarizerController = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided for summarization.' });
    }

    try {
        const summary = await generateSummary(text);
        console.log(summary);

    } catch (error) {
        console.error('Error summarizing text:', error.message);
        res.status(500).json({ error: 'Internal server error, failed to summarize text.' });
    }
};

module.exports = summarizerController;