const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan'); // Optional for logging
require('dotenv').config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://wrightist.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan('dev')); // Optional
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// MongoDB URI
const mongoURI = process.env.MONGO_URI || "mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

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

// Health check route (Optional)
app.get('/health', (req, res) => res.send('Server is healthy!'));

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
