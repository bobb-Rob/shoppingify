import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CountChange from './CountChange';
import { deleteItemFromActiveList } from '../shoppingListSlice';

const ShopListItem = ({
  name, qty, completed, recordId,
}) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(false);
  const editingMode = useSelector((state) => state.shoppingList.editingMode);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handleMouseLeave() {
    setHovered(false);
  }

  function handleCheckChange() {
    console.log(completed);
    // Update the backend data
    setChecked((ch) => !ch);
  }

  const checkboxes = (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleCheckChange}
      className="w-5 bg-orange h-12 cursor-pointer mr-2"
    />
  );

  return (
    <div
      className="flex items-center min-h-[2rem] mb-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!editingMode ? checkboxes : null }
      <div className="flex items-center justify-between w-full">
        <span
          className=""
          style={
            checked ? {
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              textDecorationThickness: '2px',
            } : {}
          }
        >
          {name}
        </span>
        <CountChange
          quantity={qty}
          hovered={hovered}
          handleDeleteShopItem={() => dispatch(deleteItemFromActiveList({ recordId, accessToken }))}
        />
      </div>
    </div>
  );
};

ShopListItem.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  recordId: PropTypes.number.isRequired,
};

export default ShopListItem;
