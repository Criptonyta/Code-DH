// PAUSADO EN MINUTO 16.20 


// Con un servidor montado con express generator + BD moviesDB (tablas, movies, actors, genres) + Postman instalado (permite hacer peticiones de todos los tipos HTTP) + el controlador + los modelos + rutas:


// app.js  ------------------------------------

const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

const moviesRoutes = require('./routes/movies');

app.use('/movies', moviesRoutes)

app.listen(3000, () => {
    console.log('Servidor andando en el puerto 3000')
});




// routes > movies.js  ------------------------------------

const express = require('express');
const router = express.Router();

const controller = require('../controllers/moviesController');

router.get('/', controller.list);
router.get('/:id', controller.show); // Creo la ruta para que envie para un id especifico


module.exports = router;

// controller > moviesController.js  ------------------------------------

const DB = require('../database/models'); // Le pido que traiga los modelos y los guarde en DB
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Movie // contruyo el primer EP API, usando el modelo al que quiero consultar, usando el metodo findAll
            .findAll()

            .then(movies => { // como es asincr, incluyo el then, que recibe las peliculas
                return res.status(200).json({ // Responde con el metodo JSON para solicitudes exitosas (200)
                    total: movies.length, //Envia la cantidad de items en el encabezado
                    data: movies, // Envia todas las peliculas
                    status: 200 // Envia 200 si el pedido fue exitoso
                })
            })
    },
    show: (req, res) => { // Creo el metodo show para que envie solo 1 pelicula por Id
        DB.Movie // contruyo el 2' EP API, usando el modelo al que quiero consultar, usando findByPk (id)
            .findByPk(req.params.id)

            .then(movie => { // como es asincr, incluyo el then, que recibe la pelicula
                return res.status(200).json({ // Responde con el metodo JSON para solicitudes exitosas (200)
                    data: movie, // Envia la pelicula indicada en la URL
                    status: 200 // Envia 200 si el pedido fue exitoso
                })
            })
    }
}



// models > movie.js  ------------------------------------

'use strict';
module.exports = (sequelize, DataTypes) => {
    const movie = sequelize.define('Movie', { // Le pido que traiga estas columans de la tabla
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.NUMBER,
        release_date: DataTypes.DATE,
        length: DataTypes.DATE,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updatedAt',
    });

    movie.associate = models => {
        movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        })
        movie.belongToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie'
        })

    }
}


// models > movie.js  ------------------------------------

'use strict';
module.exports = (sequelize, DataTypes) => {
    const movie = sequelize.define('Movie', { // Le pido que traiga estas columans de la tabla
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.NUMBER,
        release_date: DataTypes.DATE,
        length: DataTypes.DATE,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updatedAt',
    });

    movie.associate = models => {
        movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        })
        movie.belongToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie'
        })

    }
}


// models > actor.js  ------------------------------------

'use strict';
module.exports = (sequelize, DataTypes) => {
    const actor = sequelize.define('Actor', { // Le pido que traiga estas columans de la tabla
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updatedAt',
    });

    movie.associate = models => {
        actor.belongsTo(models.Movie, {
            as: 'movies',
            foreignKey: 'actor_movie'
        })
    }
    return actor;
}


// models > genre.js  ------------------------------------

'use strict';
module.exports = (sequelize, DataTypes) => {
    const genre = sequelize.define('Genre', {
        name: DataTypes.STRING,
    }, {
        createdAt: 'created_at',
        updatedAt: 'updatedAt',
    });

    movie.associate = models => {
        genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }
    return genre;
}