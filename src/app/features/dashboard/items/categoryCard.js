import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const categoryCard = ({ categoryName, catId, itemsArr }) => {
  const name = categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1).toLowerCase();
  return (
    <div className="mb-6 ">
      <span className="font-bold">{name}</span>
      <div className="item-container mt-3">
        {itemsArr.map((item) => (
          <ItemCard key={item.id} catId={catId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default categoryCard;

categoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  catId: PropTypes.number.isRequired,
  itemsArr: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};
