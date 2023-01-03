import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountChange from './CountChange';

const ShopListItem = ({ name, qty, completed }) => {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }

  function handleCheckChange() {
    console.log(completed);
    setChecked((ch) => !ch);
  }

  console.log(checked);

  return (
    <div
      className="flex items-center min-h-[2rem] mb-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
        className="w-5 bg-orange h-12 cursor-pointer mr-2"
      />
      <div className="flex justify-between w-full">
        <span>
          {name}
        </span>
        <CountChange
          quantity={qty}
          hovered={hovered}
          handleDeleteShopItem={() => {}}
        />
      </div>
    </div>
  );
};

ShopListItem.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default ShopListItem;
