const Post = require('../models/post.model');
const uuid = require('uuid');

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

exports.getRange = async function(req, res) {
  try {
    const { startI, endI } = req.params;

    let response = await Post.find()
      .sort({ createdAt: 'desc' })
      .skip(parseInt(startI))
      .limit(parseInt(endI));

    let postsCount = await Post.countDocuments();

    res.json({
      posts: response,
      postsCount
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err
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

exports.editPost = async (req, res) => {
  try {
    let response = await Post.findOneAndUpdate({ id: req.params.id }, req.body);

    res.json(response);
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err
    });
  }
};

exports.addPost = async (req, res) => {
  try {
    let newPost = new Post(req.body);

    newPost.id = uuid.v4();
    console.log(newPost);
    let savedPost = await newPost.save();

    res.json(savedPost);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: true,
      errorMsg: e
    });
  }
};
