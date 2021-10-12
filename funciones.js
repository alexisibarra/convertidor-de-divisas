//  ------------ Funciones
const multiplicar = (a, b) => a * b; // a es peso y b es la cantidad de dolares 
const dividir = (a, b) => a / b; // a es el monto total de pesos y b es el valor del dolar 

// Selección de función
const convertir = () => {
    if (opcionSeleccionada == "Chile" || accionConvertir == "Pesos a dolares") {
        pesoAdolar();
    } else if (opcionSeleccionada == "Chile" || accionConvertir == "Dolares a pesos") {
        dolarApeso();
    } else if (opcionSeleccionada == "Chile" || accionConvertir == "Pesos a pesos") {
        pesoApeso();
    } else if (opcionSeleccionada == "Argentina" || accionConvertir == "Pesos a dolares") {
        pesoAdolar();
    } else if (opcionSeleccionada == "Argentina" || accionConvertir == "Dolares a pesos") {
        dolarApeso();
    } else if (opcionSeleccionada == "Argentina" || accionConvertir == "Pesos a pesos") {
        pesoApeso();
    }
}


// Pasar de pesos a dolar
const pesoAdolar = () => {
    let divisa = opcionSeleccionada;
    let pesos = cantidad;
    
    if (divisa == "Chile") {
        let valorConvertido = dividir(pesos, dolarChileno);
        resultadoConvertido();

    } else if (divisa == "Argentina") {
        let valorConvertido = dividir(pesos, dolarArgentino);
        resultadoConvertido();
    }
}

// Pasar de dolares a peso
const dolarApeso = () => {
    let divisa = prompt('Indique qué divisa quiere convertir a pesos \n 1- Peso Chileno \n 2- Peso Argentino');
    let dolares = parseInt(prompt('Indique el valor en dólares que quiere convertir. \n Favor no considerar puntos ni signos'));

    if (divisa == 1 || divisa == 'Peso Chileno' || divisa == 'peso chileno') {
        let total = multiplicar(dolares, dolarChileno);
        alert(`$${dolares} son $${total} pesos chilenos`);
    } else if (divisa == 2 || divisa == 'Peso Argentino' || divisa == 'peso argentino') {
        let total = multiplicar(dolares, dolarArgentino);
        alert(`$${dolares} son $${total} pesos argentinos`);
    }
}

// Pasar de pesos chilenos a argentinos, o de pesos argentinos a chilenos
const pesoApeso = () => {
    let divisa = parseInt(prompt('¿A qué divisa quiere hacer cambio? \n 1- Peso Chileno a Peso Argentino. \n 2- Peso Argentino a Peso Chileno'));

    if (divisa == 1 || divisa == 'peso chileno a peso argentino' || divisa == 'Peso Chileno a Peso Argentino') {
        
        let valorPesoChileno = parseInt(prompt('Indique cantidad de pesos chilenos a convertir \n Favor no considerar puntos ni signos'));
        
        let pesoChilenoApesoArgentino = multiplicar((dividir(valorPesoChileno, dolarChileno)), dolarArgentino);
        alert(`$${valorPesoChileno} son $${pesoChilenoApesoArgentino} pesos argentinos`);
        
    } else if (divisa == 2 || divisa == 'peso argentino a peso chileno' || divisa == 'Peso Argentino a Peso Chileno') {
        
        let valorPesoArgentino = parseInt(prompt('Indique cantidad de pesos argentinos a convertir \n Favor no considerar puntos ni signos'));
        
        let pesoArgentinoApesoChileno = multiplicar((dividir(valorPesoArgentino, dolarArgentino)), dolarChileno);
        alert(`$${valorPesoArgentino} son $${pesoArgentinoApesoChileno} pesos chilenos`);
        
    }
}



//  ------------ DOM
let resultadoFinal = document.getElementById("resultado");

const resultadoConvertido = () => {
    if (opcionSeleccionada == "Chile"){
        if(accionConvertir == "Pesos a dolares") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} pesos chilenos son: </p> <p id="valor-convertido">$${valorConvertido} dólares.</p>`;
            resultadoFinal.appendChild(conversion);
        } else if (opcionSeleccionada == "Dolares a pesos") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} dólares son: </p> <p id="valor-convertido">$${valorConvertido} pesos chilenos.</p>`;
            resultadoFinal.appendChild(conversion);
        } else if (opcionSeleccionada == "Pesos a pesos") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} pesos chilenos son: </p> <p id="valor-convertido">$${valorConvertido} pesos argentinos.</p>`;
            resultadoFinal.appendChild(conversion);
        }
    } else if (opcionSeleccionada == "Argentina") {
        if(accionConvertir == "Pesos a dolares") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} pesos argentinos son: </p> <p id="valor-convertido">$${valorConvertido} dólares.</p>`;
            resultadoFinal.appendChild(conversion);
        } else if (opcionSeleccionada == "Dolares a pesos") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} dólares son: </p> <p id="valor-convertido">$${valorConvertido} pesos argentinos.</p>`;
            resultadoFinal.appendChild(conversion);
        } else if (opcionSeleccionada == "Pesos a pesos") {
            let conversion = document.createElement("div");
            conversion.innerHTML = `<p>$${cantidad} pesos argentinos son: </p> <p id="valor-convertido">$${valorConvertido} pesos chilenos.</p>`;
            resultadoFinal.appendChild(conversion);
        }
    }
}