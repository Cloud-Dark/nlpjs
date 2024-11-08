const trainModel = require('./train');
const startServer = require('./server');
const loadModel = require('./load');
const processInput = require('./process');

const command = process.argv[2];

(async () => {
    if (command === 'train') {
        await trainModel();
    } else if (command === 'api') {
        const manager = loadModel();
        await startServer(manager);
    } else if (command === 'simple_qna') {
        const input = process.argv[3];
        const language = process.argv[4] || 'en';

        if (!input) {
            console.error('Please provide an input text for simple_qna');
            process.exit(1);
        }

        const manager = loadModel();
        const answer = await processInput(manager, language, input);
        console.log(answer);
    } else {
        console.log('Usage:');
        console.log('  node index.js train                - to train and save the model');
        console.log('  node index.js api                  - to start the API server');
        console.log('  node index.js simple_qna <text> [language] - to process a single input');
    }
})();
