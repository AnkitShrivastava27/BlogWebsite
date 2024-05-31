const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const url2="mongodb+srv://ankit:12ankit3@new.cq1ewgq.mongodb.net/"
mongoose.connect(url2, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(cors()); 
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.get('/', (req, res) => {
  res.send('products api running new deploy');
});
// theser r api routes
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/LoginRoute.js'));
app.use('/api', require('./routes/profile.js'));
app.use('/api', require('./routes/newpost.js'));
app.use('/api', require('./routes/mypost.js'));
app.use('/api', require('./routes/home.js'));
app.use('/api', require('./routes/likes.js'));
app.use('/api',require('./routes/GetLikes.js'));
app.use('/api',require('./routes/getpost.js'))
app.use('/api',require('./routes/Delete.js'))
app.listen(PORT, () => {
  console.log('Server is listenin on PORT :' + PORT);
});
