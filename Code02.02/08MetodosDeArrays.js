let notas = [3, 5, 10, 9, 7, 8, 8, 8, 4];
console.log(notas)

// Push (agrega elementos al final agregandose secuencialmente)
notas.push(1);
notas.push(4);
console.log(notas);

// Pop (quita el ultimo elemento, podria guardarlo en una variable para reeutilizarlo)
let elUltimo = notas.pop();
console.log(elUltimo);

// Shift (quita el primer elemento, podria guardarlo en una variable para retilizarlo)
let elPrimero = notas.shift();
let elSegundo = notas.shift();
console.log(elPrimero);
console.log(elSegundo);

// Unshift (agrega el valor indicado al principio, tambien en orden secuencial)
notas.unshift(1);
notas.unshift(4);
console.log(notas);

// IndexOf (devuelve la primera posicion del valor buscado en el array. Si no lo encuentra da -1 )
let posicionDelOcho = notas.indexOf(8);
console.log(posicionDelOcho);

// LastIndexof (devuelve la ultima posicion del valor buscado en el array. Si no lo encuentra da -1 )
let posicionDelCuatro = notas.lastIndexOf(4);
console.log(posicionDelCuatro);

// Join (Nos devuelve un string, no un array. Dentro del () debo indicar que va en el medio de cada valor)
let resultadoJuntado = notas.join(' ');
console.log(resultadoJuntado);



// DIFERENCIA ENTRE [ ] Y { } PARA ARRAYS EN JAVASCRIPT

// Una duda muy frecuente en el uso de Javascript es cuándo es necesario usar llaves o corchetes al trabajar con arrays.
// Los corchetes se usan para series que poseen valores simples, mientras que las llaves son utilizadas para las series en que hay distintos objetos y propiedades con diferentes valores. Este último caso es bastante similar al sistema de PHP.
// De todas formas debemos tener en claro que en JS por convención, las llaves definen objetos y no arrays. Veamos un par de ejemplos:

// Ejemplo del uso de corchetes “[ ]”

var answers = ['yes','no','maybe'];
var names = ['David','Kristina','Charlie','Angela'];

// Ejemplo del uso de llaves “{ }”
//example - random array
var programmer = { 'name':'David Walsh', 'url':'http://davidwalsh.name', 'girl':'Kristina'}

//example - used for an object’s properties
var Element = implement({
getText: function(){
return this.get('text');
}
});

