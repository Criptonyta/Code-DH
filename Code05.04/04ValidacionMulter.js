// Validacion => Permite que se suban determinados archivos y no otros. Cuando se produce un error, multer se lo delega a express y podemos mostrarselo al usuario de la siguiente forma:


var multer = require ('multer');
var upload = multer().single('avatarFile')
app.post('/register', (req,res) =>{
    upload(req, res, (err) => {
        if(err) {
            res.status(400).send("Algo salio mal");
        }
        res.send(req.file);
    });
});

// Para validar la carga del archivo y saber si se envio o no, podemos analizar el objeto req.file:

var multer = require('multer');
var upload = multer({storage:storage})
app.post('/register', upload.single('avatarFile'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const error = new Error ('Por favor seleccione un archivo')
        error.httpStatusCode = 400
        return next (error)
    }
        res.send(file)
})