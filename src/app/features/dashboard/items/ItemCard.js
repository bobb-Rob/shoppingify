import React from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const ItemCard = ({ itemName, id }) => {
  // const dispatch = useDispatch();

  return (
    <div     
      className="flex w-full rounded-xl p-3 justify-between items-center shadow-[0_2px_8px_-1px_rgba(181,181,181,1)]"
      onClick={() => console.log(id)}
    >
      <span className="font-medium">{itemName}</span>
      <button
        type="button"
      >
        <HiOutlinePlusSm className="text-xl" />
      </button>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
