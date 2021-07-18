// IfTernario => no lleva {}, ni If, ni else. Se usa solo cuando la condicion se cumple o no se cumple
// se escribe asi: condicion ? expresion para el true : expresion para el false

let fruta = 'Manzana';
let resultado = fruta == 'Manzana' ? 'Buenisimo, me gustan las manzanas' : 'Ufa, queria Manzanas';
console.log (resultado);


// Switch => hace lo mismo que cualquier condicional, pero solo para cuando es verdadero
// se escribe asi: switch (expresion){
// case caso 1: console.log ('se cumple el caso 1');
// break;   
// }

let semaforo = 'Violeta';
switch (semaforo) {
    case 'Verde': console.log ('Podes Cruzar');
    break;
    case 'Amarillo': console.log ('Precaucion');
    break;
    case 'Rojo': console.log ('No cruces');
    break;
    default: console.log ('No funciona el semaforo'); // se usa la palabra reservada default cuando no cubre ninguna de las opciones anteriores
    break;
}
