// api.js
const express = require('express');
const app = express();
const port = 3000; // Port yang akan digunakan oleh server API

// Middleware agar server dapat membaca data dalam format JSON
app.use(express.json());

// Endpoint GET sederhana
app.get('/api/hello', (req, res) => {
  res.send('Hello from the API!');
});

// Endpoint POST sederhana
app.post('/api/data', (req, res) => {
  const { message } = req.body;
  res.send(`Received message: ${message}`);
});

// Jalankan server API
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});