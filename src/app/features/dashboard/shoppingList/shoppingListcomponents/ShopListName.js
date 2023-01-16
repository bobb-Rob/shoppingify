import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { switchEditingMode } from '../shoppingListSlice';

const ShopListHeader = ({ listName }) => {
  const dispatch = useDispatch();
  const editingMode = useSelector((state) => state.shoppingList.editingMode);

  const editIcon = (
    <MdModeEdit
      onClick={() => dispatch(switchEditingMode())}
      className="cursor-pointer text-xl"
    />
  );

  const backIcon = (
    <BsArrowLeft className="text-xl cursor-pointer hover:text-orange" onClick={() => dispatch(switchEditingMode())} />
  );

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl">
        {listName}
      </h1>
      {
        editingMode ? editIcon : backIcon
      }
    </div>
  );
};

ShopListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default ShopListHeader;
