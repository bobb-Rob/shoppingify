import React from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';

const ItemCard = ({ itemName }) => (
  <div className="flex rounded-5">
    <span>{itemName}</span>
    <button
      type="button">
      <HiOutlinePlusSm />
    </button>
  </div>
);

export default ItemCard;

ItemCard.proptypes = {
  itemName: PropTypes.string.isRequired,
};
