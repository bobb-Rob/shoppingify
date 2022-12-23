import React, { useContext } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { AppState } from '../../../DataProvider';

const ItemCard = ({ item, catId }) => {
  const { displayItemDetails } = useContext(AppState);

  return (
    <div
      className="flex w-full rounded-xl p-3 cursor-pointer justify-between items-center shadow-[0_2px_8px_-1px_rgba(181,181,181,1)]"
      onClick={() => displayItemDetails(item)}
    >
      <span className="font-medium">{item.name}</span>
      <button type="button">
        <HiOutlinePlusSm className="text-xl" />
      </button>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    note: PropTypes.string,
    image: PropTypes.string,
    category_name: PropTypes.string,
  }).isRequired,
  catId: PropTypes.number.isRequired,
};
