const fs = require('fs');
const { NlpManager } = require('node-nlp');
const modelFileName = 'brain.model';
const manager = new NlpManager({ languages: ['en', 'id'] });

function loadModel() {
    if (fs.existsSync(modelFileName)) {
        manager.load(modelFileName);
        console.log('Brain model loaded from file.');
    } else {
        console.log('Model file not found. Run "node index.js train" to train and save the model first.');
        process.exit(1);
    }
}

module.exports = { loadModel, manager };
