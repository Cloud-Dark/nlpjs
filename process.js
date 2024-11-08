function handleArithmetic(intent, entities) {
    const num1 = parseFloat(entities[0].sourceText);
    const num2 = parseFloat(entities[1].sourceText);

    switch (intent) {
        case 'math.add':
            return `The result is ${num1 + num2}`;
        // Additional cases for other operations...
        default:
            return 'I could not perform the calculation.';
    }
}

module.exports = async function processInput(manager, language, input) {
    const response = await manager.process(language, input);

    if (response.intent.startsWith('math.')) {
        return handleArithmetic(response.intent, response.entities);
    } else {
        return response.answer;
    }
};
