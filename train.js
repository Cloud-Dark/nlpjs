const { NlpManager } = require('node-nlp');
const { model } = require('./model');

const modelFileName = 'brain.model';
const manager = new NlpManager({ languages: ['en', 'id'] });

// Function to train and save the model
async function trainAndSave() {
    // Add predefined math intents and load additional data from URL
    await model(manager);

    // Train and save the model
    await manager.train();
    manager.save(modelFileName);
    console.log('Brain model trained and saved.');
}

// Export the trainAndSave function
module.exports = { trainAndSave };
