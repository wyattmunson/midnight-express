const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (important for POST requests later!)
app.use(express.json());

// A simple root route
app.get('/', (req, res) => {
  res.send('Welcome to your Express Server! 🚀');
});

// Your requested JSON endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'Allllll aboard!',
    timestamp: new Date().toISOString()
  });
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;