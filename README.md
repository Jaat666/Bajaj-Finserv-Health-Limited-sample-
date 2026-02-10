# BFHL Challenge

A Node.js/Express application for the BFHL (Bajaj FinServ Health) challenge.

## Project Structure

```
src/
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── controllers/        # Request handlers
├── middleware/         # Custom middleware
├── utils/              # Utility functions
└── services/           # Business logic services
```

## Installation

```bash
npm install
```

## Development

Run the development server with auto-reload:

```bash
npm run dev
```

## Production

Start the server:

```bash
npm start
```

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=3000
USER_ID=your_user_id
EMAIL=your_email@example.com
ROLL_NUMBER=your_roll_number
```

## API Endpoints

### POST /bfhl
- Main endpoint for BFHL operations
- Request body: `{ "data": [...] }`

### GET /bfhl
- Returns operation code

## License

MIT
