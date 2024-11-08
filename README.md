# NLP.js Math and Question-Answer Application

This project is an AI-powered Node.js application using `node-nlp` to handle simple question answering and basic math operations. It can be trained on specific intents and run as an Express server to respond to HTTP requests.

## Features

- **Answer General Questions**: The model is trained to respond to general questions such as "What can you do?".
- **Simple Math Operations**: Supports addition, subtraction, multiplication, and division in both English and Indonesian.
- **REST API Support**: Launches an Express server to handle POST requests for math and other queries.
- **Extensible Training**: Allows additional data to be added for more intents or specific knowledge.

## Project Structure

- `index.js`: Main entry point of the application.
- `train.js`: Trains and saves the NLP model.
- `model.js`: Defines intents and answers for math and general capabilities.
- `process.js`: Processes questions and performs calculations.
- `server.js`: Sets up an Express server to handle HTTP requests.
- `load.js`: Loads the saved NLP model.
- `package.json`: Contains project dependencies.

## Prerequisites

- **Node.js v20.17.0** or higher
- **npm** (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Cloud-Dark/nlpjs
   cd nlpjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Training the Model

To train the model, run:
```bash
node index.js train
```

This will create a model file `brain.model`, which will be loaded during question answering.

### Running the Server

To start the Express server, run:
```bash
node index.js express
```

The server will run on `http://localhost:3000`. You can send POST requests to this server with a question payload to receive answers.

Example request:
```bash
curl -X POST http://localhost:3000/math -H "Content-Type: application/json" -d '{"question": "berapa hasil dari 5 tambah 3"}'
```

### Asking Questions in Command Line

To use the question-answer functionality directly from the command line, run:
```bash
node index.js
```

This will prompt a default question or can be modified to ask other questions.

## Supported Math Operations

The application supports the following math operations in both English and Indonesian:

- **Addition**: "add 5 and 3", "berapa hasil dari 5 tambah 3"
- **Subtraction**: "subtract 2 from 10", "berapa hasil dari 10 kurang 2"
- **Multiplication**: "multiply 4 and 6", "berapa hasil dari 4 kali 6"
- **Division**: "divide 8 by 2", "berapa hasil dari 8 bagi 2"

## Troubleshooting

### Common Errors

1. **Error: `TypeError: process is not a function`**
   - Solution: Ensure that `process.js` is imported with a unique name in `index.js` (e.g., `processQuestion`).

2. **Model File Not Found**
   - Ensure you have trained the model by running `node index.js train`.

## Dependencies

- [node-nlp](https://www.npmjs.com/package/node-nlp)
- [axios](https://www.npmjs.com/package/axios)
- [express](https://www.npmjs.com/package/express)

## License

This project is licensed under the ISC License.