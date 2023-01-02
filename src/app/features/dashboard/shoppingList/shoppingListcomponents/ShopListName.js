import React from 'react';
import { useDispatch } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import PropTypes from 'prop-types';
import { switchEditingMode } from '../shoppingListSlice';

const ShopListHeader = ({ listName }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between align-center">
      <h1>
        {listName}
      </h1>
      <MdModeEdit
        onClick={() => dispatch(switchEditingMode())}
        className="cursor-pointer"
      />
    </div>
  );
};

ShopListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default ShopListHeader;
