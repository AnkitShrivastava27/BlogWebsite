const express = require('express');

const router = express.Router();
const Post = require('../models/NewPostModel'); 
//const { v4: uuidv4 } = require('uuid'); // Import UUID generator

router.post('/newposts', async (req, res) => {
  try {
    const {pid,uid, genre, postTitle, postContent, author } = req.body;

    
    if (!genre || !postTitle || !postContent) {
      return res.status(400).json({ error: 'Please provide genre, title, and post' });
    }

    
    const newPost = new Post({
      pid,
      uid, 
      postTitle,
      author,
      postContent,
      genre
    });

    
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
