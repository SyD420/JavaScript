let precio = parseInt(prompt("ingrese el precio del producto"))
let cantidadCuotas = prompt ("Ingrese en cuantas cuotas quiere pagar el producto")
let precioCuota= 0

if (cantidadCuotas == 3){
     let precioCuota=precio/3
    console.log("El precio son de 3 cuotas de " + precioCuota)
}else if (cantidadCuotas == 6){
    let precioCuota = precio/6
    console.log("El precio son de 6 cuotas de " + precioCuota)
}else{
    precioInteres=(precio*20)/100
    precioFinal=precio+precioInteres
    let coutaFinal=precioFinal/cantidadCuotas
    console.log("El precio es de " +cantidadCuotas ," cuotas de " + coutaFinal)
}