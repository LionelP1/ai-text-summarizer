const express = require('express');
const summarizerController = require('../controllers/summarizeController');

const router = express.Router();

router.post('/', summarizerController);

module.exports = router;