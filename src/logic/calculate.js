/* eslint-disable no-param-reassign */
import operate from './operate';

const operations = ['+', '-', 'X', '÷', '%', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
export default {
  calculate: (data, buttonName) => {
    let result;
    let temp;
    let {
      total, next, operation, prevNext,
    } = data;

    const equals = () => {
      result = operate(parseInt(total, 10), parseInt(next, 10), operation);
      result.toString();
      total = result;
      next = null;
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
          next = prevNext || total;
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
        temp = temp ? temp + buttonName : buttonName;
        next = temp;
        prevNext = next;
        result = next;
        console.log('second number', prevNext);
      }
    } else {
      console.log('clicked something else', buttonName);
      const parsedTotal = parseInt(total, 10);
      const parsedNext = parseInt(next, 10);

      switch (buttonName) {
        case '+/-':
          if (next) {
            next = (parsedNext * -1).toString();
            result = next;
          } else {
            total = total ? (parsedTotal * -1).toString() : '0';
            result = total;
          }
          break;
        case 'AC':
          result = '0';
          total = null;
          next = null;
          operation = null;
          break;
        case '.':
          if (next) {
            next += '.';
            result = next;
          } else {
            total = total ? `${total}.` : '0.';
            result = total;
          }
          break;
        default:
          break;
      }
    }
    return {
      newTotal: total,
      newNext: next,
      newOperation: operation,
      newPrevNext: prevNext,
      newResult: result,
    };
  },
};
