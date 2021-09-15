// ERROR 404 => Indica que el recurso que se busca no existe.
// Express brinda por defecto un recurso para resolver esas peticiones no encontradas.

// en app.js, se utiliza el metodo use con tres argumentos

app.use((req,res,next) => {
    res.status(404).render('not-found')     // res.status indica que si lo que busco no fue encontrado, renderice
})