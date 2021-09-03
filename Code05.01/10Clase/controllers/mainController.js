const mainController = {
    home: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile('home');
    },
    about: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile('about');
    },
};
module.exports = mainController;               // Exportamos el objeto literal