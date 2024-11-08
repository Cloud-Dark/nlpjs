const { NlpManager } = require('node-nlp');
const defineModel = require('./model');

module.exports = async function trainModel() {
    const manager = new NlpManager({ languages: ['en', 'id'], forceNER: true });
    defineModel(manager);
    await manager.train();
    manager.save('brain.model');
    console.log('Training completed and model saved to brain.model');
};
