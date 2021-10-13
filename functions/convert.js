import { dolarToPesoValue } from '../constants/dolarToPesoValue.js';
import { dolarToPeso } from './dolarToPeso.js';
import { pesoToDolar } from './pesoToDolar.js';
import { pesoToPeso } from './pesoToPeso.js';

export const convert = (inputValue, selectedAction, selectedPeso) => {
  const targetPesoValue = dolarToPesoValue[selectedPeso];

  const convertedValue = selectedAction === 1 ?
    pesoToDolar(inputValue, targetPesoValue) :
    selectedAction === 2 ?
      dolarToPeso(inputValue, targetPesoValue) :
      pesoToPeso(inputValue, selectedPeso);

  return convertedValue;
};


