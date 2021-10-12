// Selección de función
let convertir = prompt('Seleccione que acción le gustaría hacer \n 1- Pasar de pesos a dólares \n 2- Pasar de dólares a pesos \n 3- Pasar de pesos a pesos');

if (convertir == 1 || convertir == 'Pasar de pesos a dólares' || convertir == 'pasar de pesos a dolares' || convertir == 'pasar de pesos a dólares') {
    pesoAdolar();
} else if (convertir == 2 || convertir == 'Pasar de dólares a pesos' || convertir == 'pasar de dolares a pesos' || convertir == 'pasar de dólares a pesos') {
    dolarApeso();
} else if (convertir == 3 || convertir == 'Pasar de pesos a pesos' || convertir == 'pasar de pesos a pesos') {
    pesoApeso();
}


// Pasar de pesos a dolar
const pesoAdolar = () => {
    let divisa = prompt('Indique qué divisa quiere convertir a dolares \n 1- Peso Chileno \n 2- Peso Argentino');
    let pesos = parseInt(prompt('Indique el valor en pesos que quiere convertir. \n Favor no considerar puntos ni signos'));

    if (divisa == 1 || divisa == 'Peso Chileno' || divisa == 'peso chileno') {
        let total = dividir(pesos, dolarChileno);
        alert(`$${pesos} son $${total} dólares`);
    } else if (divisa == 2 || divisa == 'Peso Argentino' || divisa == 'peso argentino') {
        let total = dividir(pesos, dolarArgentino);
        alert(`$${pesos} son $${total} dólares`);
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

