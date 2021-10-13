import { dolarToPesoValue } from '../constants/dolarToPesoValue.js';

export const pesoToPeso = (inputValue, selectedPeso) => {
  const targetPesoValue = (dolarToPesoValue[selectedPeso === 1 ? 2 : 1]);

  return (inputValue / targetPesoValue) * dolarToPesoValue[selectedPeso];
};
