// Arrow functions no necesitan usar la palabra reservada function, ni return, ni las llaves
// si tiene un solo parametro, tampoco son necesarios los ()
let laMitad = numero => numero / 2;
console.log (laMitad (8));


// Cuando tengo mas de un parametro, uso los (). Eso cuando tengo solo un resultado posible
let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log (dividir (8,2));


// Si tengo mas de un resultado posible, debo usar el return y los {}
let tengoQueTrabajar = dia => {
    if(dia == 'Sabado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    } else {
        return 'Si, tenes que trabajar';
    }
}
console.log (tengoQueTrabajar('Lunes'));