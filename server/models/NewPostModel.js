

const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
 /* pid: {
    type: String,
    required: true,
    unique: true
  },
  postTitle: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  postContent: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }*/
  pid: { type: String, required: true, unique: true },
  postTitle: String,
  author: String,
  postContent: String,
  createdAt: { type: Date, default: Date.now },
  genre: String,
 
});


const NewPostModel = mongoose.model('Post', postSchema);

module.exports = NewPostModel;
