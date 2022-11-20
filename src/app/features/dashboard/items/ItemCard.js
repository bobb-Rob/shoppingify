import React from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showDetails } from '../../redux/RSidebarReducers/RSidebarReducers';

const ItemCard = ({ itemName, id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="flex border max-w-max rounded-xl px-3 mr-3"
      onClick={() => dispatch(showDetails(id))}
    >
      <span>{itemName}</span>
      <button
        type="button"
      >
        <HiOutlinePlusSm />
      </button>
    </button>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
