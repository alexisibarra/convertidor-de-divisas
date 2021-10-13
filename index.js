
import { convertAndDisplay } from "./functions/convertAndDisplay.js";


// SelectedAction
// 1 for "Pesos a dólares"
// 2 for "Dolares a pesos"
// 3 for "Pesos a pesos"
var selectedAction = 0;


// Seleccionar acción
// 1 for "Chilenos"
// 2 for "Argentinos"
var selectedPeso = 2;

const convertidor = document.getElementById("convertir");
convertidor.addEventListener("click", () => { convertAndDisplay(selectedAction, selectedPeso) });

const convertirAdolares = document.getElementById("opcion-1");
convertirAdolares.onclick = () => { selectedAction = 1; }

const convertirApesos = document.getElementById("opcion-2");
convertirApesos.onclick = () => { selectedAction = 2 }

const convertirAmoneda = document.getElementById("opcion-3");
convertirAmoneda.onclick = () => { selectedAction = 3 }

const opcionCh = document.getElementById("peso-ch");
opcionCh.onclick = () => { selectedPeso = 1; };

const opcionArg = document.getElementById("peso-arg");
opcionArg.onclick = () => { selectedPeso = 2; };

