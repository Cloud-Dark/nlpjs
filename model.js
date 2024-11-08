module.exports = function defineModel(manager) {
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
    // General information intents
    manager.addDocument('en', 'What is the weather like?', 'info.weather');
    manager.addDocument('en', 'Tell me the news', 'info.news');
    manager.addDocument('id', 'Bagaimana cuacanya?', 'info.weather');
    manager.addDocument('id', 'Beritakan kabarnya', 'info.news');

    // Answers for general intents
    manager.addAnswer('en', 'info.weather', 'I currently cannot fetch weather data.');
    manager.addAnswer('en', 'info.news', 'I currently cannot fetch news data.');
    manager.addAnswer('id', 'info.weather', 'Saat ini saya tidak bisa mengambil data cuaca.');
    manager.addAnswer('id', 'info.news', 'Saat ini saya tidak bisa mengambil berita.');
    // Sapaan (Greetings)
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hi there', 'greetings.hello');
    manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you today?');

    // Pertanyaan umum (General questions)
    manager.addDocument('en', 'what is the weather like', 'info.weather');
    manager.addAnswer('en', 'info.weather', 'I am unable to fetch real-time weather data.');
};
