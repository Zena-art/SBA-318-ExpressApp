const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Add user route
router.post('/add', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(400).send(err));
});

// Other user routes...

module.exports = router;
