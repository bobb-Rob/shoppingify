/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="checkbox-wrapper">
      <label
        htmlFor="rememberMe"
      >
        <input
          type="checkbox"
          checked={isChecked}
          name="rememberMe"
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? 'checked' : ''}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
