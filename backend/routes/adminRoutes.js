const express = require('express');
const {addCandidate, removeCandidate, getLiveVotes, getAdminStats, getAllCandidates} = require('../controllers/adminController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.get('/candidates', auth, role('admin'), getAllCandidates);
router.post('/candidates', auth, role('admin'), addCandidate);
router.delete('/candidates/:id', auth, role('admin'), removeCandidate);
router.get('/live-votes', auth, role('admin'), getLiveVotes);
router.get('/stats', auth, role('admin'), getAdminStats);

module.exports = router;