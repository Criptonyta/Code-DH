// Operador de propagacion sirve para convinar los valores de un array con otro.
// Lo que hace es exparcir uno a uno los valores de la variable original en uno nuevo.
// La sintaxis es ... y el nombre de la variable. Se puede usar para arrays, funciones y objetos literales


// Para arrays
let peliculasAccion = ['Endgame', 'IronMan 3', 'Capitan America'];
let peliculasComedia = ['Mi pobre angelito', 'Que paso ayer?'];
let peliculas = [...peliculasAccion, ...peliculasComedia];
console.log(peliculas);

// Para objetos

let generoComedias ={
    nombreGenero: 'Comedia',
    popularidad: 3
}
let miPobreAngelito = {
    nombre: 'Mi pobre angelito',
    duracion: 120,
    ...generoComedias
}
let quePasoAyer = {
    nombre: 'Que paso ayer?',
    duracion: 110,
    ...generoComedias
}
console.log(miPobreAngelito);


// Para funciones
function peliculasVistas(...nombresDePeliculas){
    for( let i = 0; i<nombresDePeliculas.length; i++){
    console.log('La persona ya vio '+ nombresDePeliculas[i])
    }
}
peliculasVistas ('Endgame', 'IronMan 3', 'Mi pobre angelito')