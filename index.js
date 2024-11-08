const { trainAndSave } = require('./train');
const { loadModel } = require('./load');
const { startServer } = require('./server');
const { processMath } = require('./process');

const command = process.argv[2];

if (command === 'train') {
    trainAndSave();
} else if (command === 'express') {
    loadModel();
    startServer();
} else {
    loadModel();
    (async () => {
        const question = 'berapa jumlah 5+10';
        const answer = await processMath(question);
        console.log(answer);
    })();
}
