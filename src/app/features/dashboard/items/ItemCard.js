import React, { useContext } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../DataProvider';
import { addItemToActiveList } from '../shoppingList/shoppingListSlice';

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { displayItemDetails } = useContext(AppState);
  const accessToken = useSelector((state) => state.session.accessToken);
  const activeList = useSelector((state) => state.shoppingList.activeList);
  const newRecord = { item_id: item.id, list_id: activeList?.id, quantity: 1 };

  return (
    <div
      className="flex w-full rounded-xl justify-between items-center shadow-[0_2px_8px_-1px_rgba(181,181,181,1)]"
    >
      <button
        onClick={() => displayItemDetails(item)}
        type="button"
        className="text-left flex-grow hover:text-orange hover:font-bold p-3 cursor-pointer"
      >
        {item.name}
      </button>
      <div className="flex justify-center rounded-r-xl items-center cursor-pointer w-[30px] h-full hover:bg-orange hover:text-white">
        <HiOutlinePlusSm
          className="text-xl"
          onClick={() => dispatch(addItemToActiveList({ newRecord, accessToken }))}
        />
      </div>
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
};
