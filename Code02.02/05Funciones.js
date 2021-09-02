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



// . Diferencias entre una funcion declarada y expresada?
// . Cual es mas eficiente y porque?

// Funciones Declarativas:
// En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar('Diego');

// Función Expresada:
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
nombre('Diego');

// En la funcion expresada, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.