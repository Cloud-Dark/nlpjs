const { trainAndSave } = require('./train');
const { loadModel } = require('./load');
const { startServer } = require('./server');
const { process: processQuestion } = require('./process');

const command = process.argv[2];

if (command === 'train') {
    trainAndSave();
} else if (command === 'express') {
    loadModel();
    startServer();
} else {
    loadModel();
    (async () => {
        const question = 'berapa jumlah 1 dan 1?';
        const answer = await processQuestion(question);
        console.log(answer);
    })();
}
