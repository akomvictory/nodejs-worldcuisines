const express = require('express');
const primaryController = require('../controllers/primaryController');

const router = express.Router();

router.get('/', primaryController.index);
router.get('/asian', primaryController.asian_countries);
router.get('/philippines/cuisines', primaryController.philippines_cuisines);
router.get('/philippines/cuisine/lechon', primaryController.php_lechon);


module.exports = router;