const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // <-- authentication routes
const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
