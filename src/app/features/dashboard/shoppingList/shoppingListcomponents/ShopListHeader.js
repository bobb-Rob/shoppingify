import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

const ShopListHeader = ({ listName }) => (
  <div className="flex justify-between align-center">
    <h1>
      {listName}
      Shopping List
    </h1>
    <MdModeEdit />
  </div>
);

ShopListHeader.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default ShopListHeader;
