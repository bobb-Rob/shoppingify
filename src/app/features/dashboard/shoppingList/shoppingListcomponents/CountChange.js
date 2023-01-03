import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const CountChange = ({ handleDeleteShopItem, quantity, hovered }) => {
  if (hovered) {
    return (
      <div className="flex items-center bg-white rounded rounded-full h-[2rem] max-w-fit ml-1">
        <div className="bg-orange cursor-pointer rounded rounded-lg h-full w-[1.6rem] flex justify-center items-center mr-2 text-white">
          <MdDeleteOutline
            onClick={handleDeleteShopItem}
          />
        </div>
        <div className="flex items-center text-orange">
          <HiMinusSm className="cursor-pointer" />
          <div className="text-center w-[4rem] border border-orange rounded rounded-[20px] px-2 py-[3.5px] text-xs mx-2">
            {quantity}
            {' '}
            pcs
          </div>
          <HiPlusSm className="mr-1 cursor-pointer" />
        </div>
      </div>
    );
  }
  return (
    <div className="text-center text-orange border border-orange w-[4rem] rounded rounded-[20px] px-2 py-[3.5px] text-xs mx-2">
      {quantity}
      {' '}
      pcs
    </div>
  );
};

CountChange.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleDeleteShopItem: PropTypes.func.isRequired,
  hovered: PropTypes.bool.isRequired,
};

export default CountChange;
