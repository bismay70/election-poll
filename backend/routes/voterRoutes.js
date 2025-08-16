const express = require('express');
const {castVote, seeCandidates} = require('../controllers/adminController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.post('/vote', auth, role('voter'), castVote);
router.get('/candidates', auth, role('voter'), seeCandidates);

module.exports = router;