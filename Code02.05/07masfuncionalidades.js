// Más funcionalidades
// El cliente le pidió saber cuánto dinero generaron las ventas.

// María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

// Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

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
   }
};