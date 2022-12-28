import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeft } from 'react-icons/bs';

const BackArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-orange flex mb-5"
  >
    <BsArrowLeft className="text-orange" />
    <span className="text-xs ml-2">back</span>
  </button>
);

export default BackArrow;

BackArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
