import React from 'react';
import CreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';

const Select = ({ handleChange, options, onInputChange }) => (
  <CreatableSelect
    isClearable
    onChange={handleChange}
    onInputChange={onInputChange}
    options={options}
  />
);

export default Select;

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
