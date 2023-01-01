import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountChange from './CountChange';

const ShopListItem = ({ name, qty }) => {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <div
      className="flex items-center justify-between min-h-[2rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>
        Avocago
        {name}
      </span>
      <CountChange
        quantity={qty}
        hovered={hovered}
      />
    </div>
  );
};

ShopListItem.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default ShopListItem;
