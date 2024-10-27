const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create a new comment
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.redirect(`/posts/${req.body.post}`);
});

// Other comment routes...

module.exports = router;
