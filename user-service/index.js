const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://root:password@mongodb:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/health', (req, res) => {
  res.json({ status: 'User Service healthy' });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
}); 