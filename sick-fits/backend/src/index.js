// Start Node \u{1F92C}

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO Use Express middleware to handle cookies (JWT)
// TODO Use Express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(
      '\x1b[35m',
      `Server started at http://localhost/${details.port}`
    );
  }
);
