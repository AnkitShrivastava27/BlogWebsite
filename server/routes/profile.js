
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel.js'); 
const bcrypt = require('bcrypt');


router.get('/users/:username', async (req, res) => {
    try {
      const { username } = req.params;
      console.log(username)
      const user = await User.findOne({ username });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


module.exports = router;
