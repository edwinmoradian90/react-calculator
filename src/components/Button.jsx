import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  const style = {
    background: color,
  };
  return (
    <div style={style} className={wide ? 'buttonWide' : 'button'}>
      {name}
    </div>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};
