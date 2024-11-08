const express = require('express');
const processInput = require('./process');

module.exports = async function startServer(manager) {
    const app = express();
    app.use(express.json());

    app.post('/api/message', async (req, res) => {
        const { language, text } = req.body;

        if (!language || !text) {
            return res.status(400).json({ error: 'Please provide both language and text in the request body.' });
        }

        try {
            const answer = await processInput(manager, language, text);
            res.json({ answer });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
