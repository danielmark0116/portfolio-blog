const express = require('express');
const router = express.Router();
const sanitize = require('../middleware/sanitize');

const postController = require('../controllers/post.controller');

// GET
// desc: get all the posts
router.get('/posts', sanitize, postController.getPosts);

// GET
// desc: get RANGE of POSTS
router.get('/posts/range/:startI/:endI', sanitize, postController.getRange);

// GET
// desc: get ONE RANDOM post
router.get('/post/random', sanitize, postController.getRandomPost);

// GET
// desc: get ONE the post by ID
router.get('/post/:id', sanitize, postController.getPostById);

// POST
// desc: Add post
router.post('/posts', sanitize, postController.addPost);

// PUT
// desc: Edit post
router.put('/post/:id', sanitize, postController.editPost);

module.exports = router;
