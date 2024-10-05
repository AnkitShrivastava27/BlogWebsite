
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
 
  postid: String,
  
  author: String
 
});

const LikeModel = mongoose.model('likes', likeSchema);

module.exports = LikeModel;
