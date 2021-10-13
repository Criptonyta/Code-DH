// ------ Segun el video ------ Al igual que en sql, el where tambien esta presente en sequelize, como metodo de busqueda.


const Op = db.Sequelize.Op; // Requiero los operadores de Sequelize para tenerlos disponibles.


const peliculas = {
    drama: function (req, res) {
        db.Peliculas.findAll({ //busca en todas las peliculas
                where: { // cuyo nombre contenga una 's'
                    nombre: {
                        [Op.like]: '%s%' // El operador like va entre corchetes y uso el % como comodin
                    }
                }
            })
            .then(function (peliculas) {
                res.render('peliculasDrama', {
                    peliculas: peliculas
                }) // lo encuentra, envia el resultado a la vista
            })
    },



    // Para buscar un resultado que contenga algun criterio o caracter en especifico, en sql usabamos el operador like y el signo %%. En sequelize, lo hacemos asi:






    // Para buscar un resultado que contenga algun criterio que implique el uso de algun operador:

    top: function (req, res) {
        db.Peliculas.findAll({ //busca en todas las peliculas
                where: { // se escribe igual que el anterior pero con una diferencia grande en el criterio
                    rating: { // elijo con que columna quiero comparar o buscar
                        [db.Sequelize.Op.gt]: 8 // SE CREA un objeto literal, del lado izq se pone el valor y del lado derecho se llama a la db, al metodo sequelize y luego al metodo Op, que es donde estan todos los operadores (*) que vienen dentro del paquete. en este caso, usamos Greater Than (gt o mayor que) y TODO VA ENTRE CORCHETES
                    }
                }
            })
            .then(function (peliculas) {
                res.render('peliculasTop', {
                    peliculas: peliculas
                }) // lo encuentra, envia el resultado a la vista
            })
    },

}



// (*) Podemos buscar todos los operadores disponibles en la documentacion de sequelize https://sequelize.org/v5/manual/querying.html