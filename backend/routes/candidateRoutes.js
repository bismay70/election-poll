const express = require('express');
const {addCandidate, removeCandidate, getLiveVotes} = require('../controllers/adminController')
const {auth} = require('../middleware/authMiddleware')
const {role} = require('../middleware/roleMiddleware')

const router= express.Router();

router.post('/candidates', auth, role, addCandidate);
router.post('/candidates/:id', auth, role, removeCandidate);
router.post('/live-votes', auth, role, getLiveVotes);

module.exports = router;