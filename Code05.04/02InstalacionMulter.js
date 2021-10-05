// Multer => Multer es un paquete de npm que se utiliza para procesar archivos del lado del servidor. Este paquete es usado generalmente como un middleware y no solo nos va a permitir subir archivos al servidor, en qué ubicación y el nombre con el que se guardará cada uno de ellos.


// INSTALACION : 
// 1) npm install multer


const multer = require('multer'); // 2) Requiero la libreria en el archivo (gralmente routes)


// form action = '/register'
// method = 'POST'              // 3) Preparar/adaptar el formulario HTML (vista)agregando enctype
// enctype = "multipart/form-data" >



const storage = multer.diskstorage({ // 4) Configuramos el disco de almacenamiento en servidor en routes
    destination: function (req, file, cb) {
        cb(null, 'public/images/avatars')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})

const uploadFile = multer({
    storage
}) // 5) Almacenamos la variable de ejecucion en routes.js

router.post('/register', uploadFile.single('avatar'), // 6) UploadFile es la variable que cree en el punto 5.
    usersController.create)