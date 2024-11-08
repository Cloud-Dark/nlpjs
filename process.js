const { manager } = require('./load');

async function processMath(question) {
    const response = await manager.process('id', question);

    let result;
    const { entities } = response;
    if (entities.length === 2) {
        const num1 = parseFloat(entities[0].sourceText);
        const num2 = parseFloat(entities[1].sourceText);

        switch (response.intent) {
            case 'math.add':
                result = num1 + num2;
                break;
            case 'math.subtract':
                result = num2 - num1;
                break;
            case 'math.multiply':
                result = num1 * num2;
                break;
            case 'math.divide':
                result = num2 / num1;
                break;
            default:
                result = 'Unknown operation';
        }
    } else {
        result = 'Please provide two numbers';
    }

    response.answer = response.answer.replace('{{ result }}', result);
    return response.answer;
}

module.exports = { processMath };
