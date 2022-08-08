import React from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';

const ItemCard = ({ itemName }) => (
  <div className="flex border max-w-max rounded-xl px-3 mr-3">
    <span>{itemName}</span>
    <button
      type="button"
    >
      <HiOutlinePlusSm />
    </button>
  </div>
);

export default ItemCard;

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
};
