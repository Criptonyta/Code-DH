// Total de ventas
// Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

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
   },
   listaDeVentas: function(){
       return this.autos.filter(item=>item.vendido).map(item=>item.precio)
   },
   totalDeVentas: function (){
        return this.listaDeVentas().reduce((acc,item)=>acc+item,0)
   },
};