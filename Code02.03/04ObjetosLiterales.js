// Ejemplo de objeto literal

let curso = {
    cantidadDeAlumnos: 32,
    docentes: ['Nacho', 'Javier'],
    horario: "de 19 a 21 hs."
}

console.log(curso);
console.log(curso.cantidadDeAlumnos);
console.log('La cantidad de alumnos de este curso es ' + curso.cantidadDeAlumnos);

// Ejemplo de metodo (funciones que se asignan como valor a una clave para que hagan algo mas que tener un simple dato)
// Al ser una funcion, necesita ser ejecutada, por lo que hay que poner los () despues del metodo (nombre de la variable.propiedad)

let curso2 = {
    cantidadDeAlumnos: 32,
    docentes: ['Nacho', 'Javier'],
    horario: "de 19 a 21 hs.",
    notificaciones: function (){
        return 'El horario de la cursada es de 19 a 21 hs';
    }
}
console.log (curso2.notificaciones());

// Ejemplo de metodo con this (se usa para hacer referencia al objeto al cual estamos instanciando)

let curso3 = {
    cantidadDeAlumnos: 32,
    docentes: ['Nacho', 'Javier'],
    horario: "de 19 a 21 hs.",
    notificaciones: function (){
        return 'El horario de la cursada es ' + this.horario;
    }
}
console.log (curso3.notificaciones());


// Ejemplo de constructor (se usa para crear templates con la misma estructura pero no quiero repetir las claves)
// Para identificarlas, la primera letra del nombre va en mayuscula

function Cursos (cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Cursos (50,['Javier', 'Gerardo'], 'de 21 a 23 hs');
let cursoDeMarketing = new Cursos (45,['Diego', 'Debbie'], 'de 15 a 18 hs');

console.log (cursoDeProgramacion);
console.log (cursoDeMarketing);
