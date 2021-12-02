/*

Seguramente alguna vez hemos pedido comida a domicilio (o delivery) desde alguna aplicación, después de enviar el pedido, esta entra en un proceso de varias etapas.

Por ejemplo, lo primero que sucede es que la aplicación indica que está enviando la orden al restaurante. Después, cuando el restaurante confirma, lo que sucede es que la comida entra en proceso de "preparación". Una vez está lista, pasa a la etapa de "en manos del repartidor" y finalmente la comida llega a la etapa "entregada" para acabar con todo el proceso.

Lo anterior no es otra cosa más que el CICLO DE VIDA de un pedido. Desde el punto inicial en donde se envío la orden, hasta el punto final en donde llega la comida a la mesa.

Así como sucede en este escenario, algo muy similar pasa con los componentes. React se encarga de hacer pasar los mismos por tres claras etapas, que se evidencian cuando el componente:

Se muestra en pantalla (montaje).
Sufre cambios (actualización).
Deja mostrarse en pantalla (desmontaje).
A todo este proceso React lo llama el "ciclo de vida" y es algo muy importante de entender, ya que a lo largo de estas tres etapas vamos a poder generar distintas funcionalidades si así lo quisiéramos.

Veamos entonces en el siguiente video cómo se lleva a cabo el ciclo de vida de un componente.

---------------------


componentDidMount() => Solemos utilizar este método para identificar el momento del ciclo vida del componente donde se ha renderizado por primera vez. Solo se ejecuta después de la primera renderización, del lado del usuario osea que lo veríamos a través de la consola del navegador. Uno de sus usos más comunes es, por ejemplo, encargarse de hacer algún pedido asincrónico (quizás a alguna API) una vez que el componente fue renderizado.

componentDidMount(){
console.log('El componente fue renderizado');
}


componentDidUpdate() => Método que utilizamos para identificar cuando un componente fue actualizado. Es decir, cuando sufrió ciertos cambios que hayamos programado en nuestro proyecto.

componentDidMount(){
console.log('El componente fue renderizado');
}



componentWillUnmount() => Método que utilizamos para identificar el momento en que un componente va a dejar de existir. Es decir, no va a volver a ser renderizado. Dentro del método solemos hacer una “limpieza” de cualquier otro método que haya estado utilizando el componente que, de ahora en más, no va a volver a ser
renderizado.

componentDidMount(){
console.log('El componente fue renderizado');
}

*/
