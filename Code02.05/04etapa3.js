// Etapa 3
// Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

// ¿Cómo lo resuelven?

// Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

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
   }
};