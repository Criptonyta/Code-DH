const fs =require("fs");

function escribirTareas(arrayDeTareas){ //muestra por pantalla las tareas de un array
    arrayDeTareas.forEach(tarea => {
    console.log(`Tarea: ${tarea.titulo}\nEstado: ${tarea.estado}\n-----------------------------------`);
    });
}
function leerJSON(){ //lee el archivo de tareas
    return JSON.parse(fs.readFileSync('./tareas.json','UTF-8'));
}

function escribirJSON(arrayDeTareas){ //escribe el archivo de tareas
    fs.writeFileSync('./tareas.json',JSON.stringify(arrayDeTareas))
}

function guardarTarea(tarea,arrayDeTareas){ //guarda una nueva tarea
    arrayDeTareas=leerJSON(); // levanta el archivo en un array
    arrayDeTareas.push(tarea); //agrega la nueva tarea al array
    escribirJSON(arrayDeTareas) //escribe todas las tareas en el archivo
}

function filtrarPorEstado(){
}

function leerPorEstado(estado) { //devuelve un array filtrado por tareas
    let arrayDeTareas=leerJSON(); //levanta el archivo en un array
    return arrayDeTareas.filter(tarea => tarea.estado===estado) //devuelvo el array filtrado
}

module.exports={escribirTareas,leerJSON,escribirJSON,guardarTarea,leerPorEstado}