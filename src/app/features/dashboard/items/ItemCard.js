import React from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const ItemCard = ({ itemName, id }) => {
  // const dispatch = useDispatch();

  return (
    <div     
      className="flex border max-w-max rounded-xl px-3 mr-3"
      onClick={() => console.log(id)}
    >
      <span>{itemName}</span>
      <button
        type="button"
      >
        <HiOutlinePlusSm />
      </button>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
