/*
Con React podemos hacer solicitudes asincrónicas a un endpoint que nos provea una API cualquiera. Así vamos a poder generar que nuestros componentes sean dinámicos y consuman información desde el back-end.
Cuando ingresamos a Facebook, habremos notado cómo algunas partes de la interfaz se ven en color gris y, de un momento a otro, la información aparece como por arte de magia.
Lo anterior es posible de lograr implementando correctamente el ciclo de vida del componente y la correspondiente petición asincrónica a una API.
Con esta funcionalidad a mano, vamos a poder incluso hacer peticiones a la API creada clases atrás. Esa información ahora podrá ser consumida directamente desde la aplicación hecha con React.

BIBLIOTECAS AJAX => Con react podemos usar cualquier biblioteca AJAX, las mas populares son Axios, JQuery AJAX, windows.fetch

componentDidMount() => Con este metodo que identifica el ciclo de vida del componente, JUSTO DESPUES DE LA PRIMERA VEZ QUE FUE RENDERIZADO, es donde debemos buscar la informacion que queremos de la API 
*/

// configuramos el estado del componente para que pueda almacenar la informacion de la API luego de hacer el fetch
class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            git: ""
        }
    }

// ejecutamos el fetch() hacia el endpoint donde esta la informacion. Una vez procesada la data con .json, la misma estara lista para ser utilizada. Por eso, en el segundo .then(), asignamos esa informacion al estado del componente que habia declarado previamente 
    componentDidMount(){
        fetch('ENDPONIT DE LA API')
        .then(response => {response.json})
        .then(data=>)
    }

}
