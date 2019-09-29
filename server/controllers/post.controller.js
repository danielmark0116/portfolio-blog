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

exports.getPostById = async (req, res) => {
  try {
    let response = await Post.findOne({ id: req.params.id });

    res.json(response);
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err
    });
  }
};
