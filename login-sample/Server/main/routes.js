const express = require('express');
const router = express.Router();

const auth = require('./tools/auth');
const users = require('./controllers/users');

router.post('/api/users', users.createUsers);
router.post('/api/login', users.loginUsers);

// router.use(auth);
router.get('/api/users', users.getAllUsers);

module.exports = router;
