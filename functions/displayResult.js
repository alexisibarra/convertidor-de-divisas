export const displayResult = (inputValue, selectedAction, selectedPeso, convertedValue) => {
  const resultadoFinal = document.getElementById("resultado");

  const originalCurrencyType = selectedPeso === 1 ? 'chilenos' : 'argentinos';
  const targetCurrency = selectedAction === 1 ? 'dólares' : 'pesos';

  resultadoFinal.innerHTML = `<p>$${inputValue} pesos ${originalCurrencyType} son: </p> <p id="valor-convertido">$${convertedValue} ${targetCurrency}.</p>`;
};
