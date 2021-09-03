const express = require('express')
const mainController = require('../controllers/mainController'); // llamo al controlador

const router = express.Router(); 

router.get('/', mainController.home) // ejecuto el metodo que corresponda en cada linea
router.get('/about', mainController.about) // ejecuto el metodo que corresponda en cada linea



module.exports = router; // exporto el modulo router