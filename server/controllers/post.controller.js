const Post = require('../models/post.model');

exports.getPosts = async function(req, res) {
  try {
    let response = await Post.find();
    res.json(response);
  } catch (e) {
    res.status(500).json({
      error: true,
      errorMsg: e
    });
  }
};
