const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

// GET
// desc: get all the posts
router.get('/posts', postController.getPosts);

// GET
// desc: get ONE the post by ID
router.get('/post/:id', postController.getPostById);

// POST
// desc: Add post
router.post('/posts', postController.addPost);

// PUT
// desc: Edit post
router.put('/post/:id', postController.editPost);

module.exports = router;
