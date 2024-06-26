const express = require('express');
const { signup, login, getUserDetails } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', auth, getUserDetails);

module.exports = router;
