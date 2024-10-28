const express = require('express');
const router = express.Router();

let users = []; // In-memory array to store users

// POST route to add a user
router.post('/add', (req, res) => {
    const name = req.body.name; // Get the name from the request body
    if (!name) {
        return res.status(400).send('Name is required'); // Respond with an error if name is not provided
    }
    
    // Create a new user object
    const newUser = { id: users.length + 1, name };
    users.push(newUser); // Add the new user to the array
    res.status(201).json(newUser); // Respond with the newly created user
});

module.exports = router; // Export the router for use in other files
