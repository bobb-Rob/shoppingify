import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemQty } from '../shoppingListSlice';

const CountChange = ({
  handleDeleteShopItem, quantity, hovered, recordId,
}) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const [qty, setQty] = useState(quantity);

  const data = {
    recordId,
    newQty: { quantity: qty },
    accessToken,
  };

  const handleQtyIncrement = async () => {
    data.newQty.quantity += 1;
    const response = await dispatch(updateItemQty(data));
    if (response.type === 'lists/updateItemQty/fulfilled') {
      setQty(qty + 1);
    } else {
      // display error message on UI if rejected
      setQty(qty);
    }
  };

  const handleQtyDecrement = async () => {
    data.newQty.quantity -= 1;
    const response = await dispatch(updateItemQty(data));
    if (response.type === 'lists/updateItemQty/fulfilled') {
      setQty(qty - 1);
    } else {
      setQty(qty);
    }
  };

  if (hovered) {
    return (
      <div className="flex items-center bg-white rounded rounded-full h-[2rem] max-w-fit ml-1">
        <div className="bg-orange cursor-pointer rounded rounded-lg h-full w-[1.6rem] flex justify-center items-center mr-2 text-white">
          <MdDeleteOutline
            onClick={handleDeleteShopItem}
          />
        </div>
        <div
          className="flex items-center text-orange"
        >
          <HiMinusSm
            className="minus cursor-pointer border"
            onClick={handleQtyDecrement}
          />
          <div className="text-center w-[4rem] border border-orange rounded rounded-[20px] px-2 py-[3.5px] text-xs mx-2">
            {qty}
            {' '}
            pcs
          </div>
          <HiPlusSm
            className="plus mr-1 cursor-pointer border"
            onClick={handleQtyIncrement}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="text-center text-orange border border-orange w-[4rem] rounded rounded-[20px] px-2 py-[3.5px] text-xs mx-2">
      {qty}
      {' '}
      pcs
    </div>
  );
};

CountChange.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleDeleteShopItem: PropTypes.func.isRequired,
  hovered: PropTypes.bool.isRequired,
  recordId: PropTypes.number.isRequired,
};

export default CountChange;
