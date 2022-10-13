// Json sirve para estandarizar en un formato transaccional, la informacion en una cadena de texto para poder utilizarla en otros lenguajes


// Si tengo un array Js
let amigos = ['Daniel', 'Javier', 'Pedro'];
console.log(amigos);

// Stringify = para convertir el array a formato Json y guardarlo en una nueva variable
let amigosJson = JSON.stringify(amigos);
console.log(amigosJson);

// Parse = Si tengo un string en formato Json y quiero llevarlo nuevamente a formato original
let amigosOriginal = JSON.parse(amigosJson);
console.log(amigosOriginal);


// Tambien se puede utilizar estos metodos con Objetos
let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle falsa 123"
};
console.log(persona);

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);


let fraseOriginal = 'Hola mundo';
let textoBuscado = 'Hola';