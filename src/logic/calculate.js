/* eslint-disable no-param-reassign */
import operate from './operate';

const buttons = ['+', '-', 'x', '÷', '%'];
export default {
  calculate: (data, buttonName) => {
    let res;
    buttons.forEach(button => {
      if (button === buttonName) {
        res = operate(data.total, data.next, buttonName);
      }
      return res;
    });
    switch (buttonName) {
      case '+/-':
        data.total *= -1;
        return data;
      case '%':
        return data.total / data.next;
      default:
        return data;
    }
  },
};
