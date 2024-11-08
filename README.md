# NLP Chatbot

A simple NLP-based chatbot application that supports both English and Indonesian languages. The chatbot can perform basic greetings, answer questions about its creator, and handle arithmetic operations. The project is organized into modular files to manage training, API, and processing.

## Project Structure

- **index.js**: Main entry point of the application. Handles command-line arguments and initiates different modes.
- **train.js**: Trains and saves the NLP model.
- **model.js**: Defines intents and answers for greetings, math operations, and creator information.
- **process.js**: Processes questions and performs calculations.
- **server.js**: Sets up an Express server to handle HTTP API requests.
- **load.js**: Loads the saved NLP model from a file.

## Getting Started

### Prerequisites

- **Node.js** installed on your machine.
- **npm** for package management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cloud-Dark/nlpjs
   ```
2. Navigate to the project directory:
   ```bash
   cd nlp-chatbot
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

The project supports three main commands: `train`, `api`, and `simple_qna`.

### 1. Train the Model

Train the NLP model with predefined intents and answers, then save it to a file (`brain.model`):

```bash
node index.js train
```

### 2. Start the API Server

After training the model, you can start an API server that listens for HTTP POST requests and responds with answers:

```bash
node index.js api
```

**API Endpoint**:
- **URL**: `http://localhost:3000/api/message`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "language": "en",   // Language code ('en' for English, 'id' for Indonesian)
    "text": "hello"     // The user input text
  }
  ```
- **Response**:
  ```json
  {
    "answer": "Hey there!"
  }
  ```

### 3. Run a Simple Q&A Command

Use `simple_qna` to process a single question from the command line:

```bash
node index.js simple_qna "<text>" [language]
```

- **`<text>`**: The input text/question.
- **`[language]`** (optional): Language code, either `en` (default) or `id`.

**Example**:
```bash
node index.js simple_qna "hi" en
node index.js simple_qna "siapa pembuat mu" id
```

## Project Modules

Each module serves a distinct purpose, keeping the project organized and modular:

- **train.js**: Initializes, trains, and saves the model.
- **model.js**: Contains all predefined intents and responses.
- **process.js**: Processes user input and handles arithmetic operations.
- **server.js**: Runs an Express server to manage API requests.
- **load.js**: Loads the saved model (`brain.model`) for use.

## Example Usage

### Training the Model
```bash
node index.js train
```

### API Example (using `curl`)
```bash
curl -X POST http://localhost:3000/api/message -H "Content-Type: application/json" -d '{"language": "id", "text": "siapa pembuat mu"}'
```

### Simple Q&A Example
```bash
node index.js simple_qna "calculate 10 plus 5" en
node index.js simple_qna "hitung 10 ditambah 5" id
```

## License

This project is licensed under the MIT License.
