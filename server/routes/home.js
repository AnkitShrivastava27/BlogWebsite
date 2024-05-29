const express = require('express');
const router = express.Router();
const Post = require('../models/NewPostModel.js'); 

router.get('/allpost', async (req, res) => {
    try {
     
      const allposts = await Post.find(); 
      res.json(allposts);
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
