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
    let divisa = opcionSeleccionada;
    let dolares = cantidad;

    if (divisa == "Chile") {
        let valorConvertido = multiplicar(dolares, dolarChileno);
        resultadoConvertido();
    } else if (divisa == "Argentina") {
        let valorConvertido = multiplicar(dolares, dolarArgentino);
        resultadoConvertido();
    }
}

// Pasar de pesos chilenos a argentinos, o de pesos argentinos a chilenos
const pesoApeso = () => {
    let divisa = opcionSeleccionada;
    let moneda = cantidad;

    if (divisa == "Chile") {
        let pesoChilenoApesoArgentino = multiplicar((dividir(moneda, dolarChileno)), dolarArgentino);
        resultadoConvertido(); 
    } else if (divisa == "Argentina") {
        let pesoArgentinoApesoChileno = multiplicar((dividir(moneda, dolarArgentino)), dolarChileno);
        resultadoConvertido();        
    }
}



//  ------------ DOM
let resultadoFinal = document.getElementById("resultado");

const resultadoConvertido = () => {
    if (opcionSeleccionada == "Chile"){
        if(accionConvertir == "Pesos a dolares") {
            resultadoFinal.innerHTML = `<p>$${cantidad} pesos chilenos son: </p> <p id="valor-convertido">$${valorConvertido} dólares.</p>`;
        } else if (opcionSeleccionada == "Dolares a pesos") {
            resultadoFinal.innerHTML = `<p>$${cantidad} dólares son: </p> <p id="valor-convertido">$${valorConvertido} pesos chilenos.</p>`;
        } else if (opcionSeleccionada == "Pesos a pesos") {
            resultadoFinal.innerHTML = `<p>$${cantidad} pesos chilenos son: </p> <p id="valor-convertido">$${valorConvertido} pesos argentinos.</p>`;
        }
    } else if (opcionSeleccionada == "Argentina") {
        if(accionConvertir == "Pesos a dolares") {
            resultadoFinal.innerHTML = `<p>$${cantidad} pesos argentinos son: </p> <p id="valor-convertido">$${valorConvertido} dólares.</p>`;
        } else if (opcionSeleccionada == "Dolares a pesos") {
            resultadoFinal.innerHTML = `<p>$${cantidad} dólares son: </p> <p id="valor-convertido">$${valorConvertido} pesos argentinos.</p>`;
        } else if (opcionSeleccionada == "Pesos a pesos") {
            resultadoFinal.innerHTML = `<p>$${cantidad} pesos argentinos son: </p> <p id="valor-convertido">$${valorConvertido} pesos chilenos.</p>`;
        }
    }
}