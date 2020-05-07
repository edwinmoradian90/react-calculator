/* eslint-disable no-param-reassign */
import operate from './operate';

const operations = ['+', '-', 'X', '÷', '%', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
export default {
  calculate: (data, buttonName) => {
    let result;
    let temp;
    let { total, next, operation } = data;

    const equals = () => {
      result = operate(parseInt(total, 10), parseInt(next, 10), operation);
      result.toString();
      total = result;
    };

    if (operations.includes(buttonName)) {
      console.log('clicked operation', buttonName);
      if (buttonName === '=') {
        if (!total && !operation) {
          result = '0';
          total = result;
        } else if (!total && operation) {
          result = '0';
        } else if (total && !operation) {
          result = total;
        } else if (total && operation && !next) {
          next = total;
          equals();
        } else if (total && operation && next) {
          equals();
        }
      } else if (total) {
        console.log('total');
        operation = buttonName;
        result = total;
      } else if (!total) {
        result = '0';
        total = result;
        next = total;
        operation = buttonName;
      }
    } else if (numbers.includes(buttonName)) {
      console.log('clicked number');
      if (!total) {
        total = buttonName;
        result = total;
      } else if (total && !operation) {
        total = total !== '0' ? total + buttonName : buttonName;
        result = total;
      } else if (total && operation) {
        console.log('second number', temp);
        temp = temp ? temp + buttonName : buttonName;
        next = temp;
        result = next;
      }
    } else {
      console.log('clicked something else', buttonName);
      const parsedTotal = parseInt(total, 10);
      const parsedNext = parseInt(next, 10);
      switch (buttonName) {
        case '+/-':
          if (next) {
            next = (parsedNext * -1).toString();
            console.log(next);
            result = next;
          } else {
            total = (parsedTotal * -1).toString();
            console.log(total);
            result = total;
          }
          break;
        case 'AC':
          result = '0';
          total = null;
          next = null;
          operation = null;
          break;
        default:
          break;
      }
    }
    return {
      newTotal: total,
      newNext: next,
      newOperation: operation,
      newResult: result,
    };
  },
};
