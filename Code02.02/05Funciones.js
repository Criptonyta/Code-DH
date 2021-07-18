// Funciones expresadas. Son las que guardo dentro de una variable

let sumar = function(numeroA, numeroB){
    return numeroA+numeroB;
};
console.log(sumar(8,8));

// Funciones declaradas

function restar (numeroC, numeroD){
    return numeroC-numeroD;
}
console.log(restar(4,3));

// Ejemplo de scope

let mensaje = 'Hola';
function saludar(){
    let mensaje = 'Chau';
    return mensaje;
};
console.log(mensaje);
console.log(saludar());
