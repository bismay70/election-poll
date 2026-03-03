const express = require('express');
const {getVoteCount, getVoteTrend, getCandidateProfile} = require('../controllers/candidateController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.get('/votes', auth, role('candidate'), getVoteCount);
router.get('/profile', auth, role('candidate'), getCandidateProfile);
router.get('/trend', auth, role('candidate'), getVoteTrend);

module.exports = router;