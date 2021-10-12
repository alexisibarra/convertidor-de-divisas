//  ------------ Funciones
const multiplicar = (a, b) => a * b; // a es peso y b es la cantidad de dolares 
const dividir = (a, b) => a / b; // a es el monto total de pesos y b es el valor del dolar 

//  ------------ Variables
const dolarChileno = 806;
const dolarArgentino = 99;
const opcionCh = document.getElementById("peso-ch");
const opcionArg = document.getElementById("peso-arg");



// DOM
const resultadoFinal = document.getElementById("resultado");

let conversion = document.createElement("div");
conversion.innerHTML = `<p>$${valorIngresado} pesos son: </p> <p id="valor-convertido">$${valorConvertido} pesos ${monedaSeleccionada}</p>`;
usuario.appendChild(bienvenida);

