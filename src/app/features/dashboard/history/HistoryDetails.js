import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from '../../../commons/backArrow';

const HistoryDetails = ({ name }) => {
  const returnToListHistory = () => {

  }

  return (
    <div>
      <BackArrow onClick={returnToListHistory} />
      <div>
        <h1>{name}</h1>
        <span>{date}</span>
      </div>
      <div>

      </div>
    </div>
  );
};

HistoryDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HistoryDetails;
