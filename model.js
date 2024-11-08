const axios = require('axios');

async function model(manager) {
    // Predefined math intents and answers
    manager.addDocument('en', 'add %number% and %number%', 'math.add');
    manager.addDocument('en', 'subtract %number% from %number%', 'math.subtract');
    manager.addDocument('en', 'multiply %number% and %number%', 'math.multiply');
    manager.addDocument('en', 'divide %number% by %number%', 'math.divide');

    manager.addDocument('id', 'berapa jumlah %number% + %number%', 'math.add');
    manager.addDocument('id', 'berapa hasil dari %number% tambah %number%', 'math.add');
    manager.addDocument('id', 'berapa hasil dari %number% kurang %number%', 'math.subtract');
    manager.addDocument('id', 'berapa hasil dari %number% kali %number%', 'math.multiply');
    manager.addDocument('id', 'berapa hasil dari %number% bagi %number%', 'math.divide');

    manager.addAnswer('en', 'math.add', 'The result is {{ result }}.');
    manager.addAnswer('en', 'math.subtract', 'The result is {{ result }}.');
    manager.addAnswer('en', 'math.multiply', 'The result is {{ result }}.');
    manager.addAnswer('en', 'math.divide', 'The result is {{ result }}.');

    manager.addAnswer('id', 'math.add', 'Hasilnya adalah {{ result }}.');
    manager.addAnswer('id', 'math.subtract', 'Hasilnya adalah {{ result }}.');
    manager.addAnswer('id', 'math.multiply', 'Hasilnya adalah {{ result }}.');
    manager.addAnswer('id', 'math.divide', 'Hasilnya adalah {{ result }}.');

    // General capabilities intents and answers
    manager.addDocument('en', 'What can you do?', 'general.capabilities');
    manager.addDocument('id', 'apa yang kamu bisa?', 'general.capabilities');
    manager.addAnswer('en', 'general.capabilities', 'I can help with math operations and answer other questions based on my knowledge.');
    manager.addAnswer('id', 'general.capabilities', 'Saya dapat membantu dengan operasi matematika dan menjawab pertanyaan lain berdasarkan pengetahuan saya.');

    // Load additional data from a remote JSONL file if needed
    // await loadDataModelUrl(manager, 'en', 'https://your-jsonl-url.com/data.jsonl');
}

// Helper function to load data from a JSONL URL
async function loadDataModelUrl(manager, language, url) {
    try {
        const response = await axios.get(url);
        const lines = response.data.split('\n').filter(line => line.trim());

        lines.forEach(line => {
            const data = JSON.parse(line);
            const question = data.instruction;
            const answer = data.response;
            const context = data.context || '';
            const intent = data.category || 'general.query';

            // Add the question and answer from the dataset
            manager.addDocument(language, `${context} ${question}`, intent);
            manager.addAnswer(language, intent, answer);
        });

        console.log(`Data loaded from ${url} and added to the model.`);
    } catch (error) {
        console.error(`Failed to load data from ${url}:`, error.message);
    }
}

module.exports = { model };
