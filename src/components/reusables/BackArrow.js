import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import propTypes from 'prop-types';

const BackArrow = ({ classNam }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={"back-arrow " + classNam}
    >
      <BsArrowLeft />
    </button>
  );
};

export default BackArrow;

const propTypes = {
  classNam: PropTypes.string,
};

