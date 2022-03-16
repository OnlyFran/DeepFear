let precioP = 150;
let precioR = 90;
let precioD = 50;

alert("Para ser miembro de nuestra Web, interactuar y poder tener su cuenta activa, debe adquirir un videojuego como su primera insignia")
let carrito = prompt("Qué juego desea adquirir antes de ingresar a la página? (Disponibles: Phasmophobia, Resident Evil 4 y Deceit.)");

if(carrito.toLowerCase() == "phasmophobia"){
    let compra = alert("Usted seleccionó el " + carrito + " por un valor de " + precioP + " pesos argentinos, más tarde procederá a abonar o se le suspenderá la cuenta.");
}else if(carrito.toLowerCase() == "resident evil 4"){
    let compra = alert("Usted seleccionó el " + carrito + " por un valor de " + precioR + " pesos argentinos, más tarde procederá a abonar o se le suspenderá la cuenta.");
}else if(carrito.toLowerCase() == "deceit"){
    let compra = alert("Usted seleccionó el " + carrito + " por un valor de " + precioD + " pesos argentinos, más tarde procederá a abonar o se le suspenderá la cuenta.");
}else{
    paseLibre();
}

function paseLibre(){
    alert("Usuario sin abono, comienza su prueba gratuita, al finalizar, su cuenta será suspendida.");
}