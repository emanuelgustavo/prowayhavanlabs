import { round } from 'mathjs';

class Calculations {
  calculateOperationValues = (value: Number, fromCurrencyValue: Number, toCurrencyValue: Number) => {
        
    const operationValue = round(Number(value) * (Number(fromCurrencyValue) / Number(toCurrencyValue)), 2);
    const operationTax = round(operationValue * 0.1, 2);

    return [operationValue, operationTax];
  };
};

export default Calculations;