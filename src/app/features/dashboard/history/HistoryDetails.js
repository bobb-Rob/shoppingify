import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from '../../../commons/backArrow';
import HistListCategory from './HistListCategory';

const HistoryDetails = ({ name, items }) => {
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
        {items.map((item) => {
          return <HistListCategory key={item.id} items={item.items}/>
        })}
      </div>
    </div>
  );
};

HistoryDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HistoryDetails;
