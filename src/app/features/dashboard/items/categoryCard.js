import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import capitalizeFirstLetter from '../../../helperFunctions/capitalizeFirstLeter';

const categoryCard = ({ categoryName, catId, itemsArr }) => (
  <div className="mb-6 ">
    <span className="font-bold">{capitalizeFirstLetter(categoryName)}</span>
    <div className="item-container mt-3">
      {itemsArr.map((item) => (
        <ItemCard key={item.id} catId={catId} item={item} />
      ))}
    </div>
  </div>
);

export default categoryCard;

categoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  catId: PropTypes.number.isRequired,
  itemsArr: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};
