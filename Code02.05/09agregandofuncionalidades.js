// Agregando funcionalidades
// Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

// Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

// Una persona va a ser representada mediante un objeto literal de la siguiente forma:

// {
// nombre: “Juan”,
// capacidadDePagoEnCuotas: 20000,
// capacidadDePagoTotal: 100000
// }

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
   },
   totalDeVentas: function (){
        return this.listaDeVentas().reduce((acc,item)=>acc+item,0)
   },
//    puedeComprar: function(persona,auto){
//        return auto.precio<=persona.capacidadDePagoTotal && (auto.precio/auto.cuota)<=persona.capacidadDePagoEnCuotas
//    }

puedeComprar: function (auto, persona) {
    // Si costo total auto.precio > caro ? No lo compra
    let esCaro =  auto.precio > persona.capacidadDePagoTotal ? false : true;
    // Si la capacidad de pago persona.capacidadDePagoEnCuotas < (auto.precio / auto.cuotas) ? No lo compra
    let cuotasOK = persona.capacidadDePagoEnCuotas < (auto.precio / auto.cuotas) ?false : true
    // Si las 2 anteriores = TRUE, lo compra.
    return esCaro && cuotasOK == true ? true : false
    }

};
