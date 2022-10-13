/*
REACT en sus ultimas versiones ha implementado la posibilidad de asignar estados, cliclos de vida y demas a un componente funcional para que no exista diferencia entre la implementacion de un componente con estado y uno sin estado

Los hooks no funcionan dentro de los componentes de clase, ya que con ellos vamos a poder generar funcionalidades asociadas a dichos componentes pero dentro de un componente funcional.

HOOKS => Son funciones puras de Js que van a permitir "enganchar" caracteristicas (como el ciclo de vida y el estado) a componentes funcionales. Al usarlos, ya no va a importar tanto dentro de que tipo de componentes estemos, sino que vamos a poder implementar un estado o ciclo de vida.
Cuando querramos implementqar el estado, no sera necesario tener que partir del constructor de la clase sino que usaremos el setState() de forma mas sencilla

En sintesis, con ellos, podremos reutilizar metodos entre componentes y servirnos del estado de un componente en aquellos que son funciones de Js.
*/

useEffect(() => {
  //codigo que se ejecuta una vez montado el componente
});

useEffect(() => {
  //podemos pasar nuevas actualizaciones
}, []);

useEffect(() => {
  // este codigo se ejecuta una vez montado el componente
  return () => {
    //codigo que se ejecuta una vez desmontado el componente
  };
});
