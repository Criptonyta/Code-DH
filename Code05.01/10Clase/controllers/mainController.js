const path = require ('path')  // Ayuda a resolver la ruta absoluta, necesaria para utilizar el metodo sendFile. Si uso el metodo render

const mainController = {
    home: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile(path.resolve(__dirname, '../views/home.html')); // SendFile recibe una ruta absoluta, que es convertida por el metodo path. Se puede usar render tambien y en ese caso
    },
    about: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile(path.resolve(__dirname, '../views/about.html'));
    },
};
module.exports = mainController;               // Exportamos el objeto literal