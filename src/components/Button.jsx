import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div className="button">
      {name}
    </div>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
