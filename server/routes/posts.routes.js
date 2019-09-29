const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

// GET
// desc: get all the posts
router.get('/posts', postController.getPosts);

module.exports = router;
