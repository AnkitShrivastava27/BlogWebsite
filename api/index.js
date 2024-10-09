const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS configuration (temporarily allowing all origins for testing)
const corsOptions = {
  origin: '*', // Temporarily allow all origins for testing
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // for legacy browsers (IE11, various SmartTVs) that choke on 204
};

app.use(cors(corsOptions)); // Apply CORS settings

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI
const mongoURI = process.env.MONGO_URI || "mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Preflight request handling for OPTIONS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'wrightist.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Routes
app.use('/', require('./routes/FirstPage'));
app.use('/api', require('./routes/User'));
app.use('/api', require('./routes/LoginRoute'));
app.use('/api', require('./routes/profile'));
app.use('/api', require('./routes/newpost'));
app.use('/api', require('./routes/mypost'));
app.use('/api', require('./routes/home'));
app.use('/api', require('./routes/likes'));
app.use('/api', require('./routes/GetLikes'));
app.use('/api', require('./routes/getpost'));
app.use('/api', require('./routes/Delete'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
