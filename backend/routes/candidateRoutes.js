const express = require('express');
const {getVoteCount} = require('../controllers/adminController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.get('/votes', auth, role, getVoteCount);

module.exports = router;