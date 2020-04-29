import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res = '';
  const big = new Big(numberOne);
  switch (operation) {
    case '-':
      res = big.minus(numberTwo);
      break;
    case '+':
      res = big.plus(numberTwo);
      break;
    case '÷':
      res = big.div(numberTwo);
      break;
    case 'X':
      res = big.times(numberTwo);
      break;
    case '%':
      res = big.times(numberTwo).times(100);
      break;
    default:
      break;
  }
  return res;
};

export default operate;