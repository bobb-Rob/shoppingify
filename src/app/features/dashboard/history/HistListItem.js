import React from 'react';
import PropTypes from 'prop-types';

const HistListItem = ({ ListName, date, status }) => {
  return (
    <div>
      <h3>{ListName}</h3>
      <div>
        <span>{date}</span>
        <div>{status}</div>
      </div>
    </div>
  );
};

HistListItem.propTypes = {};

export default HistListItem;