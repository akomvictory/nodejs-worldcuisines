const express = require('express');
const primaryController = require('../controllers/primaryController');

const router = express.Router();

router.get('/', primaryController.index);

module.exports = router;