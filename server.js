const express = require('express');
const { process } = require('./process');


function startServer() {
    const app = express();
    app.use(express.json());

    app.post('/math', async (req, res) => {
        const question = req.body.question;
        const answer = await process(question);
        res.send({ answer });
    });
    
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}

module.exports = { startServer };
