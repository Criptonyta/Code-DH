
// Callbacks, son funciones que reciben como parametro otra funcion

let sumar = (numero1, numero2) => numero1+numero2;
let restar = (numero1, numero2) => numero1-numero2;
let multiplicar = (numero1, numero2) => numero1*numero2;
let dividir = (numero1, numero2) => numero1/numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 6, dividir))