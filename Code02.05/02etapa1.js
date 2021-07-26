// Etapa 1
// En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

// Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

// Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.



let autos=require('./autos')

let concesionaria = {
   autos: autos
};
    let buscador = autos.indexOf();
    console.log(buscador);