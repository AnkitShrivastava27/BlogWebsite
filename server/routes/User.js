
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel.js'); 
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res) => {
  const { username, fullname, email, password } = req.body;

  try {
    // here we are Checking if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new User({
      username,
      fullname,
      email,
      password: hashedPassword
    });

    // Save  to  db
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
