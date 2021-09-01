const mainController = require ('../controllers/mainController'); // llamo al contr

router.get('/', mainController.home) // ejecuto el metodo que corresponda en cada linea
router.get('/about', mainController.about) // ejecuto el metodo que corresponda en cada linea

const router = express.main();            // exporto el modulo router