import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from 'react-icons/md';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const CountChange = ({ handleDeleteShopItem, quantity }) => (
  <div>
    <div>
      <MdDeleteOutline
        onClick={handleDeleteShopItem}
      />
    </div>
    <div>
      <HiMinusSm />
      <div>
        {quantity}
        3pcs
      </div>
      <HiPlusSm />
    </div>
  </div>
);

CountChange.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleDeleteShopItem: PropTypes.func.isRequired,
};

export default CountChange;
