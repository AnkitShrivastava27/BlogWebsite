const express = require('express');
const router = express.Router();
const Post = require('../models/NewPostModel.js'); 

router.get('/mypost/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const myposts = await Post.find({ author: username }); 
      res.json(myposts);
      console.log(myposts)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
