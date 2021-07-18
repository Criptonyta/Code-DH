
// Date en formato nativo y crudo
let fechaActual = new Date();
console.log(fechaActual);

// Date en formato UTC String (metodo nativo)
console.log(fechaActual.toUTCString());

// Obtener año actual
console.log(fechaActual.getFullYear());

// Obtener mes actual (ojo que el conteo comienza con 0)
console.log(fechaActual.getMonth());

// Obtener dia de la semana actual (ojo que el conteo comienza con 0)
console.log(fechaActual.getDate());

// Generando una fecha que sea legible para el usuario
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];// Puedo usar este array para que los meses queden bien expresados en el resultado

console.log('Hoy es el dia ' + dia + ' de ' + meses[mes] + ' de ' + anio);