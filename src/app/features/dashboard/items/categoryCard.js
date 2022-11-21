import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const categoryCard = ({ categoryName, itemsArr }) => { 
  const name = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()
    return (
    <div className="mb-4">
      <span>{name}</span>
      <div className="flex">
        {itemsArr.map((item) => (
          <ItemCard
            key={item.id}
            itemName={item.name}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default categoryCard;

categoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  itemsArr: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};
