const { NlpManager } = require('node-nlp');
const fs = require('fs');

module.exports = function loadModel() {
    const manager = new NlpManager({ languages: ['en', 'id'], forceNER: true });

    if (fs.existsSync('brain.model')) {
        manager.load('brain.model');
        console.log('Model loaded from brain.model');
    } else {
        console.error('No trained model found. Run with "train" to create a model first.');
        process.exit(1);
    }

    return manager;
};
