const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;

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
  res.json({ status: 'Order Service healthy' });
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
}); 