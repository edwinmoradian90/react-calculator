import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, handleClick,
  } = props;
  const style = { background: color };
  const clickHandler = e => {
    const buttonName = e.target.getAttribute('name');
    handleClick(buttonName);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={clickHandler}
      onKeyDown={clickHandler}
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
