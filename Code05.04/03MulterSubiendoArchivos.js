const multer = require('multer'); // luego de instalarlo, requiero multer desde donde lo usare (gralmente routes)
const path = require('path/posix');

const storage = multer.diskStorage({ // llamo el metodo diskStorage, recibe como parametro un Obj.Lit. con 2 prop.
    destination: function (req, file, cb) { // Destination => permite definir la carpeta donde almacenar el archivo
        cb(null, '/uploads') // el primer parametro es siempre null y el segundo es la ruta de la carpeta
    },
    filename: function (req, file, cb) { // filename => define el nombre con que se guardara
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // el primer parametro es null y el segundo el nombre del archivo. El metodo extname() del paquete path, nos devuelve la extension
    }
})

const uploadFile = multer({
    storage: storage
}); // configuro la ruta encargada de subir los archivos (la que indicamos en el action del formulario). Debe aplicarse en cada archivo que requiera una ruta para la subida de archivos
app.post('/register', upload.single('avatarFile'), (req, res) => { // usamos .single('nombre') donde nombre debe coincidir con el atributo name del input del formulario
    console.log(req.file) //devuelve un objeto con la informacion del archivo
    res.send("Archivo subido correctamente")
})


// Si quiero subir varios archivos en lugar de uno, reemplazo el .single por .array('nombre') donde nombre debe coincidir con los campos del formulario y el input debe tener la propiedad multiple, quedando asi:

// en el HTML:
// <input type='file' name='avatarFile' id="file" multiple>

// en agregarla al archivo de rutas en donde se encuentre nuestra ruta o rutas que se van a encargar de subir archivos (imágenes, documentos, etcétera
var upload = multer({
    storage: storage
});
app.post('/register', upload.array('avatarFiles'), function (req, res, next) {
    console.log(req.files)
    res.send('Archivos subidos correctamente')
})