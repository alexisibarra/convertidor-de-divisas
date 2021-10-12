//  ------------ Variables
const dolarChileno = 806;
const dolarArgentino = 99;


// Seleccionar moneda (Peso Argentino o Peso Chileno)
let opcionSeleccionada = 0;

let opcionCh = document.getElementById("peso-ch");
opcionCh.onclick = () => {opcionSeleccionada = "Chile";}

let opcionArg = document.getElementById("peso-arg");
opcionArg.onclick = () => {opcionSeleccionada = "Argentina";}


// Seleccionar acción
let accionConvertir = 0;

let convertirAdolares = document.getElementById("opcion-1");
convertirAdolares.onclick = () => {accionConvertir = "Pesos a dolares";}

let convertirApesos = document.getElementById("opcion-2");
convertirApesos.onclick = () => {accionConvertir = "Dolares a pesos";}

let convertirAmoneda = document.getElementById("opcion-3");
convertirAmoneda.onclick = () => {accionConvertir = "Pesos a pesos";}


// Conseguir datos
let cantidad = 0;

let cantidadAConvertir = document.getElementById("cantidad");
cantidadAConvertir.onchange = () => { cantidad = cantidadAConvertir.value}


// Conseguir resultado
let convertidor = document.getElementById("convertir");
convertidor = addEventListener("click", convertir);