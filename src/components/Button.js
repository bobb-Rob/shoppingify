import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, onSubmit }) => (
  <button
    type="button"
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {name}
  </button>
);

export default Button;

Button.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
