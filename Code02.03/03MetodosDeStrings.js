// Ejemplo de length (devuelve la cantidad de caracteres de un string incluyendo espacios)

let mensaje = " Gran dia para practicar Javascript";
console.log(mensaje.length);                        // 35

// Ejemplo de IndexOf (devuelve el lugar donde se encuentra algo que busco. Cuando no lo encuentra da -1)
console.log(mensaje.indexOf('dia'));                // 6

// Ejemplo de slice (recorta un string desde un caracter indicado hasta otro)
console.log(mensaje.slice(0,24));                   // Gran dia para practicar
console.log(mensaje);                               // Gran dia para practicar Javascript

// Ejemplo de trim (elimina un espacio en blanco al inicio y al final del string)
console.log(mensaje.trim());        

// Ejemplo de split (permite convertir un string en un array, usando el delimitador que querramos)
console.log(mensaje.split(' '));                    // [ '', 'Gran', 'dia', 'para', 'practicar', 'Javascript' ]

// Ejemplo de replace (permite reemplazar una porcion de texto en un string, usando dos parametros 1) lo que quiero reemplazar 2) el nuevo texto)
console.log(mensaje.replace('Javascript','Todo'));  //  Gran dia para practicar Todo
console.log(mensaje)                                // Gran dia para practicar Javascript