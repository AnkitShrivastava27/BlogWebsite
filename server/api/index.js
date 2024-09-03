const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// CORS configuration
const corsOptions = {
  origin: "https://wrightist-p6uxroxk2-ankitshrivastava27s-projects.vercel.app/", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI from environment variables or default value
const mongoURI = process.env.MONGO_URI || "mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/new?retryWrites=true&w=majority&appName=new";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Routes
app.use('/',require('../routes/FirstPage'));
app.use('/api', require('../routes/User'));
app.use('/api', require('../routes/LoginRoute'));
app.use('/api', require('../routes/profile'));
app.use('/api', require('../routes/newpost'));
app.use('/api', require('../routes/mypost'));
app.use('/api', require('../routes/home'));
app.use('/api', require('../routes/likes'));
app.use('/api', require('../routes/GetLikes'));
app.use('/api', require('../routes/getpost'));
app.use('/api', require('../routes/Delete'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
