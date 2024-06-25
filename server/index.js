const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// CORS configuration
const corsOptions = {
  origin: "*", // Change this to your frontend URL in production for better security
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI from environment variables or default value
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true // Ensure this option for index creation
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Routes
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
