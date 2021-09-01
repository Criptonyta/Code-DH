const controlador = {
    home: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile('home');
    },
    about: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.sendFile('about');
    },
};
module.exports = controlador;               // Exportamos el objeto literal