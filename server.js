const express = require('express');
const cors = require("cors");
const app = express();

const port = 4000; // Change the port to 4000
app.use(cors());
// Dummy route that always responds with 200 status
app.all('*', (req, res) => {
  res.status(200).json({
    message: 'Request received successfully!',
    status: 200,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Dummy API is running on http://localhost:${port}`);
});
