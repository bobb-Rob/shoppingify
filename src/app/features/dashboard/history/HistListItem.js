import React from 'react';
import PropTypes from 'prop-types';
import { FcNext } from 'react-icons/fc';

const HistListItem = ({ listName, date, status }) => (
  <div className="flex justify-between">
    <h3>{listName}</h3>
    <div className="flex gap">
      <span>{date}</span>
      <div>{status}</div>
      <FcNext />
    </div>
  </div>
);

HistListItem.propTypes = {
  listName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HistListItem;
