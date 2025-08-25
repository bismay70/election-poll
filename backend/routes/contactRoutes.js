const express = require('express');
const {postMessage} = require('../controllers/contactController.js');

const router = express.Router();

router.post('/', postMessage);

module.exports = router;