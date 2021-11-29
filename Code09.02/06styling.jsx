/* REACT permite (y es recomendado) trabajar los CSS de cada componente de forma aislada. En este sentido, dentro de la carpeta componentes, tendriamos una carpeta por cada componente, la que contendria un Js y un CSS.

Paso 1) Importar el archivo CSS al componente (desde el src>components>componente.js)
import './componenteStyling.css'

Paso 2) Asignarle una clase al componente
h2 className = "productName"

Paso 3) No repetir las clases para evitar problemas de renderizacion de la totalidad del sitio, para que no se pisen unas clases con otras (independientemente de que los estilos se encuentren en hojas separadas)



*/
