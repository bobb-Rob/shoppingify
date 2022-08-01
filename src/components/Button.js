import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, onClick, onSubmit, klassName,
}) => (
  <button
    type="button"
    onClick={onClick}
    onSubmit={onSubmit}
    className={`px-5 py-2.5 ${klassName}`}
  >
    {name}
  </button>
);

export default Button;

Button.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
  klassName: 'px-5',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  klassName: PropTypes.string,
};
