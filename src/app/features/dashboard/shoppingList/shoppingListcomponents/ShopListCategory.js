import React from 'react';
import PropTypes from 'prop-types';
import ShopListItem from './ShopListItem';

const ShopListCategory = ({ categoryName, items }) => (
  <div className="mt-4">
    <h4 className="text-xs text-grey mb-3">{categoryName}</h4>
    {
      items.map((item) => <ShopListItem key={item.id} name={item.name} qty={3} />)
    }
  </div>
);

ShopListCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default ShopListCategory;
