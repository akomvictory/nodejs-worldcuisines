const express = require('express');
const primaryController = require('../controllers/primaryController');

const router = express.Router();

router.get('/', primaryController.index);

// Africa's routes start here
//router.get('/africa', primaryController.african_countries);
//router.get('/tanzanian/cuisines', primaryController.tanzanian_cuisines);
//router.get('/spanish/cuisines/gazpaco', primaryController.esp_gazpaco);
//router.get('/spanish/cuisines/paella', primaryController.esp_paella);
//router.get('/spanish/cuisines/gambas', primaryController.esp_gambas);
// Africa's routes start here

// Europe routes start here
router.get('/europe', primaryController.european_countries);
router.get('/spanish/cuisines', primaryController.spanish_cuisines);
router.get('/spanish/cuisines/gazpaco', primaryController.esp_gazpaco);
router.get('/spanish/cuisines/paella', primaryController.esp_paella);
router.get('/spanish/cuisines/gambas', primaryController.esp_gambas);

router.get('/french/cuisines', primaryController.fr_cuisines);
router.get('/french/cuisines/bouillabaisse', primaryController.fr_bouillabaisse);
router.get('/french/cuisines/monsieur', primaryController.fr_monsieur);
router.get('/french/cuisines/lorraine', primaryController.fr_lorraine);


router.get('/itlalian/cuisines', primaryController.itl_cuisines);

/*
router.get('/italian/cuisines', primaryController.fr_cuisines);
router.get('/french/cuisines/bouillabaisse', primaryController.fr_bouillabaisse);
router.get('/french/cuisines/monsieur', primaryController.fr_monsieur);
router.get('/french/cuisines/lorraine', primaryController.fr_lorraine); */
// Europe routes ends here

//America's routes starts here
//router.get('/americas', primaryController.american_countries);
router.get('/mexican/cuisines', primaryController.mexican_cuisines);
router.get('/mexican/cuisines/pozole', primaryController.mx_pozole);
router.get('/mexican/cuisines/tostadas', primaryController.mx_tostadas);
router.get('/mexican/cuisines/chilaquile', primaryController.mx_chilaquiles);

router.get('/uruguan/cuisines', primaryController.uruguan_cuisines);
router.get('/uruguan/cuisines/asado', primaryController.ur_asado);
router.get('/uruguan/cuisines/chaja', primaryController.ur_chaja);
router.get('/uruguan/cuisines/revuelto', primaryController.ur_revuelto);







// America's routes start here


router.get('/asian', primaryController.asian_countries);
router.get('/philippines/cuisines', primaryController.philippines_cuisines);
router.get('/philippines/cuisine/lechon', primaryController.php_lechon);
router.get('/philippines/cuisine/sinigang', primaryController.php_sinigang);



module.exports = router;