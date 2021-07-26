// Agregando funcionalidades
// Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
// La función debe de realizar los siguientes pasos:
// 1) Obtener los autos para la venta
// 2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.
// 3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
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
    },

    // autosQuePuedeComprar: function(persona){
    // let autosDisponibles=this.autosParaLaVenta()
    // return autosDisponibles.filter (item=>this.puedeComprar(persona,item))

    autosQuePuedeComprar: function (persona) {
        let autosDisponibles = this.autosParaLaVenta()
        return autosDisponibles.filter(auto => this.puedeComprar(auto, persona))
    }
};