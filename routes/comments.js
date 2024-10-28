const express = require('express');
const router = express.Router();

let comments = [
    { id: 1, postId: 1, content: 'Great post!' },
    { id: 2, postId: 1, content: 'Thanks for sharing!' },
];

// GET all comments for a specific post
router.get('/:postId', (req, res) => {
    const postComments = comments.filter(c => c.postId === parseInt(req.params.postId));
    res.json(postComments);
});

// POST a new comment
router.post('/', (req, res) => {
    console.log('Received request body:', req.body); // Log the request body

    // Validate incoming data
    if (!req.body.postId || !req.body.content) {
        return res.status(400).json({ message: 'postId and content are required.' });
    }

    const newComment = { id: comments.length + 1, postId: req.body.postId, content: req.body.content };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// DELETE a comment
router.delete('/:id', (req, res) => {
    comments = comments.filter(c => c.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
