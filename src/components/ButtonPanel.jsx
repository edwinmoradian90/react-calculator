import React from 'react';
import Button from './Button';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="groupOne">
      <Button name={buttons[0]} />
      <Button name={buttons[1]} />
      <Button name={buttons[2]} />
      <Button name={buttons[3]} />
    </div>
    <div className="groupTwo">
      <Button name={buttons[4]} />
      <Button name={buttons[5]} />
      <Button name={buttons[6]} />
      <Button name={buttons[7]} />
    </div>
    <div className="groupThree">
      <Button name={buttons[8]} />
      <Button name={buttons[9]} />
      <Button name={buttons[10]} />
      <Button name={buttons[11]} />
    </div>
    <div className="groupFour">
      <Button name={buttons[12]} />
      <Button name={buttons[13]} />
      <Button name={buttons[14]} />
      <Button name={buttons[15]} />
    </div>
    <div className="groupFive">
      <Button name={buttons[16]} />
      <Button name={buttons[17]} />
      <Button name={buttons[18]} />
    </div>
  </div>
);

export default ButtonPanel;
