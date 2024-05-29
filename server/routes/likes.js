const express = require('express');
const router = express.Router();
const Likes = require('../models/LikeModel.js');

router.post('/like', async (req, res) => {
  try {
    const { postid, author } = req.body;
    
   
    const existingLike = await Likes.findOne({ postid, author });
    if (existingLike) {
      return res.status(400).json({ error: 'You have already liked this post' });
    }
    
    const newLike = new Likes({
      postid,
      author
    });
    const savedLike = await newLike.save();
    res.status(201).json(savedLike);
  } catch (error) {
    console.error("Error creating like:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
