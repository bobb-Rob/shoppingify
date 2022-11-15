import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const BackArrow = ({ classNam }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`back-arrow ${classNam}`}
    >
      <HiArrowNarrowLeft />
    </button>
  );
};

export default BackArrow;

BackArrow.propTypes = {
  classNam: PropTypes.string,
};
