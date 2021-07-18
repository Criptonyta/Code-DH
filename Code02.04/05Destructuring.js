// Destructuring nos permite extraer datos de arrays y objetos literales de una manera más sencilla


// Destructuracion de arrays = Crear una variable nueva, abrir corchetes, igual y el nombre del array a destructurar.
let cursos = ['Programacion', 'Marketing', 'UX', 'Data Science', 'UI'];
let [programacion, marketing] = cursos;

console.log(cursos);
console.log(programacion);
console.log(marketing);


// Destructuracion de objetos literales = Crear una variable nueva, abrir llaves, igual y el nombre del array a destructurar.
let persona = {
    nombre: 'Carlos',
    edad: 26,
    domicilio: 'Calle falsa 123'
};
let {nombre, edad} = persona

console.log(persona);
console.log(nombre);
console.log(edad)