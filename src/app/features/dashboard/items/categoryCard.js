import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const categoryCard = ({ categoryName, categoryArray }) => (
  <div className="mb-4">
    <span>{categoryName}</span>
    <div className="flex">
      {categoryArray.map((item) => (
        <ItemCard
          key={item.id}
          itemName={item.name}
        />
      ))}
    </div>
  </div>
);

export default categoryCard;

categoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryArray: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};
