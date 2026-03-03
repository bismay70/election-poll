const express = require('express');
const {auth} = require('../middleware/authMiddleware');
const {login, register, updatePassword} = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put("/update-password", auth, updatePassword);

module.exports = router;