const express = require('express');
const router = express.Router();
const Post = require('../models/NewPostModel.js');

router.delete('/deletepost/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(`Attempting to delete post with id: ${postId}`); 
    const deletedPost = await Post.findOneAndDelete({ pid: postId });
    if (!deletedPost) {
      console.log(`Post not found: ${postId}`); 
      return res.status(404).json({ error: 'Post not found' });
    }
    console.log(`Post deleted: ${deletedPost}`); 
    res.json({ message: 'Post deleted successfully', post: deletedPost });
  } catch (error) {
    console.error(`Error occurred: ${error.message}`); 
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
