const tareas=require("./tareas"); //requiero el modulo de funciones de las tareas
let arrayDeTareas=tareas.leerJSON(); //asigno el archivo de tareas a un array
let parametroDeEntrada=process.argv.slice(2); // me quedo con los parametros que me sirven los primeros 2 no sirven

switch (parametroDeEntrada[0]) {
    case (undefined): //no ingreso ningun parametro
        console.log("Atención - Tienes que pasar una acción.");
        break;
    case ("listar"):
        if (parametroDeEntrada[1] != null) { //quiere decir que ingreso listar mas un parametro
            let estado = parametroDeEntrada[1]; //asigno el sigiente comando al estado asumiendo que lo ingreso bien
            let tareasFiltradas = tareas.leerPorEstado(estado); //creo el array de filtrados
            console.clear();
            console.log(`Listado de tareas ${estado}\n-----------------------------------`);
            tareas.escribirTareas(tareasFiltradas)
        } else { //sino quiere decir que solamente escribio listar
            console.clear();
            console.log(`Listado de tareas\n-----------------------------------`);
            tareas.escribirTareas(arrayDeTareas);
        }
        break;
    case ("crear"):
        let nuevaTarea = { //creo un nuevo objero
            titulo: parametroDeEntrada[1], //asigno el sigiente comando al estado asumiendo que lo ingreso bien
            estado: "pendiente"
        };
        tareas.guardarTarea(nuevaTarea, arrayDeTareas); //guardo la nueva tarea, junto con el array de tareas
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}


/*
COSAS PARA MEJORAR

Se podria verificar todo lo que se ingresa

Cuando se crea una nueva tarea, si tiene mas de una palabra hay que pasarla entre comillas
eso se podria solucionar con un join luego de extraer el primer parametro

usar toLowerCase para evitar confusiones(por ejemplo entre pendiente y Pendiente cuando se pasa por parametro)

mejorar el switch

*/