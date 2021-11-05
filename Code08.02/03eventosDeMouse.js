// mouseOver

let texto = documento.querySelector('.text');
texto.onmouseover = function () {
    console.log('pasaste el mouse')
}

// o bien tambien podriamos escribirlo asi:

texto.addEventListener('mouseover', function () {
    console.log('pasaste el mouse');
})


// mouseOut

let texto = documento.querySelector('.text');
texto.onmouseout = function () {
    console.log('quitaste el mouse')
}

// o bien tambien podriamos escribirlo asi:

texto.addEventListener('mouseout', function () {
    console.log('quitaste el mouse');
})