const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// CORS configuration using the cors middleware
const corsOptions = {
  origin: "https://wrightist.vercel.app", // Your frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};

// Middleware for CORS (if you want to use the middleware approach)
// app.use(cors(corsOptions));

// Manual CORS headers setup (if you prefer this method)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://wrightist.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI from environment variables or default value
const mongoURI = process.env.MONGO_URI || "mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/', require('./routes/FirstPage')); // Adjust the path as needed
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

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
