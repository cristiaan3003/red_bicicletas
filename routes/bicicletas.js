var express = require('express');
var router = express.Router();
var bicicletasController = require('../controllers/bicicletaController');

/* GET bicicletas listing. */
router.get('/', bicicletasController.bicicletas_list);

module.exports = router;