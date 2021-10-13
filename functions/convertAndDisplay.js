import { getInputValue } from "./getInputValue.js";
import { displayResult } from "./displayResult.js";
import { convert } from "./convert.js";

export const convertAndDisplay = (selectedAction, selectedPeso) => {
  const inputValue = getInputValue();

  const convertedValue = convert(inputValue, selectedAction, selectedPeso);

  displayResult(inputValue, selectedAction, selectedPeso, convertedValue);
};
