/*
// Microdesafio 1 - Creo una constante para que con el metodo nativo fs llame al Json
const fs = require('fs'); 

function escribirDatos (){

};

// Dentro de readFileSync, vinculo el Json y le digo el formato del texto, siempre con comillas simples
let variable = fs.readFileSync('EjercicioIntegrador\tareas.json', 'utf8'); 


let.datos = JSON.parse(variable);

// Para que lea todos los datos del array, hago un bucle for
for(let i=0; i<datos.length; i++);

// Quiero que me imprima todos los titulos de las tareas que estan finalizadas
//if (datos[i].estado=='terminada'){
//console.log(datos[i].titulo)
//};

// Microdesafio 2 - Punto a) - Argv permite leer los argumentos desde la consola
let datosPorConsola = process.argv.slice(2)
if (datosPorConsola.includes('listar')){
    escribirDatos()
};

// Punto b)
if (datosPorConsola.length==0){
    console.log ('Atencion - Tienes que pasar una accion')
} else {
    console.log ('No entiendo lo que quieres hacer')
};


const fs = require ('fs');
function escribirDatos(){
    let variable = fs.readFileSync ('tareas.json','utf8');
    let datos = JSON.parse(variable);
    
    for (let i = 0; i < datos.length; i++) {
                console.log (datos[i].titulo)
 
    }
};


Este es el codigo que paso el profesor

let datosPorConsola=process.argv.slice(2)
if(datosPorConsola.length==0){
    console.log('Atención - Tienes que pasar una acción.');
}else if(datosPorConsola.includes('listar')){ 
    escribirDatos()
}else{
    console.log('No entiendo lo que quieres hacer');
}
*/


const fs = require('fs');

let opciones=process.argv.slice(2)
let operacion=opciones[0]

switch (operacion) {
    case undefined:
        console.log('debe mandar una opcion')
        break
    case 'escribir':
        Escribir(opciones[1],opciones[2])
        break;
    case 'listar':
        console.log(leerDatos())
        break;
    default:
        console.log('no te entiendo')
        break;
}


function leerDatos() {
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    return JSON.parse(fileData)

}


function Escribir(titulo,estado) {
    let currentArray=leerDatos()
    let tarea={
        titulo:titulo,
        estado:estado
    }

    currentArray.push(tarea)

    fs.writeFileSync('./tareas.json',JSON.stringify(currentArray))
    console.log('Escribir finalizado.')
}