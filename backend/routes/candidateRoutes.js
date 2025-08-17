const express = require('express');
const {getVoteCount} = require('../controllers/candidateController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.get('/votes', auth, role('candidate'), getVoteCount);

module.exports = router;