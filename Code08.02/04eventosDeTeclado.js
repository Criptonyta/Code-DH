// onkeydown => Se lanza el evento cuando se presiona una tecla (tanto las que producen un caracter como las que no)
let miInput = document.querySelector('#miInput');
miInput.onkeydown = function (event) {
    alert("Se presiono la tecla: " + event.key);
}

// onkeyup => Se lanza cuando se suelta una tecla
let miInput = document.querySelector('#miInput');
miInput.onkeyup = function (event) {
    alert("Se solto la tecla: " + event.key);
}

// onkeypress => Se lanza cuando se completa el recorrido completo de presion y liberacion de la tecla.
let miInput = document.querySelector('#miInput');
miInput.onkeypress = function (event) {
    alert("Se presiono la tecla: " + event.key);
}


//O tambien se lo puede escribir asi... En toda la ventana, estamos atentos a un evento cuando se presiona una tecla cualquiera
window.addEventListener("keypress", function () {
    alert(1)
})

// Para identificar cual es la tecla que se ha presionado, usamos la propiedad e.key
window.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        alert("Ey, Porque tocas enter?")
    }
})