const { manager } = require('./load');

async function process(question) {
    const response = await manager.process('id', question); // Adjust language if needed

    // Check if the response is a math operation
    if (response.intent.startsWith('math.') && response.entities.length === 2) {
        const num1 = parseFloat(response.entities[0].sourceText);
        const num2 = parseFloat(response.entities[1].sourceText);
        let result;

        switch (response.intent) {
            case 'math.add':
                result = num1 + num2;
                break;
            case 'math.subtract':
                result = num1 - num2;
                break;
            case 'math.multiply':
                result = num1 * num2;
                break;
            case 'math.divide':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Operation not supported';
        }

        return `Hasilnya adalah ${result}.`;
    }

    // If not a math operation, return the response answer for general questions
    if (response.answer) {
        return response.answer;
    } else {
        return 'I am unable to understand the question. Please try asking in a different way.';
    }
}

module.exports = { process };
