const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.render('posts/index', { posts });
});

// Create a new post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.redirect('/posts');
});

// Get new post form
router.get('/new', (req, res) => {
  res.render('posts/new');
});

// Other post routes...

module.exports = router;
