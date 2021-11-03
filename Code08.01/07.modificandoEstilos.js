// style => Permite sobreescribir y leer las reglas de CSS que se aplican sobre un elemento seleccionado. Mientras que en CSS las reglas llevan guiones (ej. font-size), en Js, las reglas son escritas con camelCase (fontSize). Podria por ejemplo, darle la posibilidad al usuario de que adapte el ambiente en el cual esta navegando a sus preferencias personales:

let confirmaCambios = confirm('Queres cambiar el color del titulo?') // Despliega un modal con la opcion aceptar

if (confirmaCambios) { // Si confirmaCambios = true, entonces se aplican los cambios
    let titulo = document.querySelector('.title');
    titulo.style.color = 'cyan';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '12px'
}