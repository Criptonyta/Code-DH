// Una nueva funcionalidad extra
// María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

// ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

// Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.

let autos=require('./autos')

let concesionaria = {
   autos: autos,

   buscarAuto: function (patente){
      return this.autos.filter(item=>item.patente==patente) [0] || null
   },
   venderAuto: function(patente){
      let autoBuscado=this.buscarAuto(patente)
      if(autoBuscado!=null){
         this.autos.map(item => {
            if(item==autoBuscado)item.vendido=true
         })
      }
   },
   autosParaLaVenta: function(){
       return this.autos.filter (item => !item.vendido)
   },
   autosNuevos: function(){
       return this.autosParaLaVenta().filter(item=>item.km<100)
   }
};