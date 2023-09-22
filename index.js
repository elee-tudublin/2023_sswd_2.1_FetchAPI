// This script runs server-side (see the NodeJS terminal)
// In this example its only purpose is to server the public website

// import express
import express from 'express';

// define server host and port
const HOST = '0.0.0.0';
const PORT = 3001;

// Create express app
const app = express();


// host the static site
app.use('/', express.static('public'));

// error handling https://www.robinwieruch.de/node-express-error-handling/
app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

// Start the HTTP server and listen for requests
app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
  });