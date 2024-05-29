const express = require('express');
const router = express.Router();
const Likes = require('../models/LikeModel.js'); 

router.get('/GetLikes/:postid', async (req, res) => {
  try {
    const { postid } = req.params;
    
    
    const alllikes = await Likes.find({ postid });


    const NbrLikesResult = await Likes.aggregate([
      { $match: { postid } },
      { $group: { _id: '$postid', count: { $sum: 1 } } }
    ]).exec();

  
    const NbrLikes = NbrLikesResult.length > 0 ? NbrLikesResult[0].count : 0;

    const combinedResults = {
      alllikes,
      NbrLikes
    };

    res.json(combinedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
