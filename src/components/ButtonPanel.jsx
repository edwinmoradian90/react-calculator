import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = props => (
  <div className="buttonPanel">
    {buttons.map((group, j) => (
      <div key={group} className={`group group-${j}`}>
        {group.map((button, i) => (
          <Button
            handleClick={props.clickHandler}
            key={button}
            name={button}
            id={`button${i}`}
            color={i < group.length - 1 ? 'lightgray' : 'orange'}
            wide={button === '0'}
          />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
