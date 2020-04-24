import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '',
};
