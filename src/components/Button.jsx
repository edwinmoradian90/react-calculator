import React from 'react';
import PropTypes from 'prop-types';

const keys = {
  13: '=',
  27: 'AC',
  96: '0',
  97: '1',
  98: '2',
  99: '3',
  100: '4',
  101: '5',
  102: '6',
  103: '7',
  104: '8',
  105: '9',
  106: 'X',
  107: '+',
  109: '-',
  110: '.',
  111: '÷',
};

const Button = props => {
  const {
    name, color, wide, handleClick,
  } = props;
  const style = { background: color };
  const clickHandler = e => {
    const buttonName = e.target.getAttribute('name');
    handleClick(buttonName);
  };
  const keyDown = e => {
    e.preventDefault();
    if (keys[e.keyCode]) { handleClick(keys[e.keyCode]); }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={clickHandler}
      onKeyDown={keyDown}
      name={name}
      style={style}
      className={wide ? 'buttonWide' : 'button'}
    >
      {name}
    </div>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};
