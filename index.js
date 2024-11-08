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
        const question = 'When should I go to Europe?';
        const answer = await processQuestion(question);
        const question2 = 'kamu bisa apa saja?';
        const answer2 = await processQuestion(question2);
        console.log(answer,answer2);
    })();
}
