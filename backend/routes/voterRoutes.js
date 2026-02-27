const express = require('express');
const {castVote, viewCandidates, getStats} = require('../controllers/voterController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.post('/vote/:candidateId', auth, role('voter'), castVote);
router.get('/candidates', auth, role('voter'), viewCandidates);
router.get("/stats", auth, role("voter"), getStats);

module.exports = router;