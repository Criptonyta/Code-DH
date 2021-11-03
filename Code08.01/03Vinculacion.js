/*

Al momento de trabajar con JS en un documento HTML, hay 2 tipos posibles de vinculaciones o formas de trabajarlo:

Vinculacion Interna (tambien llamado Js en linea) => Permite escribir codigo Js directamente en el archivo HTML, aunque no es la mejor forma de trabajar desde el punto de vista de la prolijidad

<body>
...
    <script>
        console.log("Hola mundo"); // No se ve en la consola de VSC, hay que verlo desde inspeccionar
    </script>
</body>


Vinculacion externa => Permite establecer un vinculo con un archivo Js Externo, no pudiendo escribir otro codigo Js en esa etiqueta. Los archivos Js se guardan en la carpeta public/Js

<body>
...
<script src="js/main.js" type="text/javascript" > // Se usa como buena practica y aclara el tipo de archivo con el que vincula
</script>
</body>



*/