const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const CorsConfig = {
  origin: "*",
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE"],
}

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || "mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/";

// Middleware
app.options("*", cors(CorsConfig)); // Match any URL for CORS preflight requests
app.use(cors(CorsConfig)); 
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Example usage of bcryptjs
const bcrypt = require('bcryptjs');

// Routes (Update all routes to use bcryptjs if applicable)
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/LoginRoute.js'));
app.use('/api', require('./routes/profile.js'));
app.use('/api', require('./routes/newpost.js'));
app.use('/api', require('./routes/mypost.js'));
app.use('/api', require('./routes/home.js'));
app.use('/api', require('./routes/likes.js'));
app.use('/api', require('./routes/GetLikes.js'));
app.use('/api', require('./routes/getpost.js'));
app.use('/api', require('./routes/Delete.js'));

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
