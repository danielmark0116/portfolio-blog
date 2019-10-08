const Post = require('../models/post.model');
const uuid = require('uuid');

exports.getPosts = async function(req, res) {
  try {
    let response = await Post.find();
    res.json(response);
  } catch (e) {
    res.status(500).json({
      error: true,
      errorMsg: e.message
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
      errorMsg: err.message
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
      errorMsg: err.message
    });
  }
};

exports.getPostLikes = async (req, res) => {
  const id = req.params.id;

  try {
    let response = await Post.findOne({ id });

    res.json(response.likes);
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err.message
    });
  }
};

exports.putPostLikes = async (req, res) => {
  const id = req.params.id;
  const option = req.params.option;

  try {
    let response = await Post.findOne({ id: id });

    response.likes += parseInt(option);

    let updated = await response.save();

    res.json(updated);
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err.message
    });
  }
};

exports.getRandomPost = async (req, res) => {
  try {
    let postsCount = await Post.countDocuments();
    let randomIndex = Math.floor(Math.random() * postsCount);
    let randomPost = await Post.findOne().skip(randomIndex);

    res.json({
      randomPost
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      errorMsg: err.message
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
