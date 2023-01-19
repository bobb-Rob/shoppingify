import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import ShopListName from './shoppingListcomponents/ShopListName';
import ShopListCategory from './shoppingListcomponents/ShopListCategory';
import capitalizeFirstLetter from '../../../helperFunctions/capitalizeFirstLeter';
import { fetchActiveList, shopListClearError } from './shoppingListSlice';
import ErrorDisplay from '../../notifications/errorMessages/ErrorDisplay';
import { AppState } from '../../../DataProvider';
import Modal from '../../modal/Modal';
import ListModal from '../../modal/listModal';

const ShoppingList = () => {
  const { showModal } = useContext(AppState);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const error = useSelector((state) => state.shoppingList.error);
  const errorMessages = useSelector((state) => state.shoppingList.errorMessages);
  const { name, items } = useSelector((state) => state.shoppingList.activeList);

  useEffect(() => {
    dispatch(fetchActiveList(accessToken));
  }, []);

  return (
    <div className="shopping-list mt-5 ">
      <ShopListName listName={capitalizeFirstLetter(name)} />
      {error && (
        <ErrorDisplay
          errorMessages={errorMessages}
          closeEvent={() => dispatch(shopListClearError())}
        />
      )}
      <div className="overflow-hidden hover:overflow-y-auto h-[300px]">
        {
          items.map((category) => {
            const { name, items } = category;
            return <ShopListCategory key={v4()} categoryName={name} items={items} />;
          })
        }
      </div>
      {showModal ? (
        <Modal>
          <ListModal />
        </Modal>
      ) : null}
    </div>
  );
};

export default ShoppingList;
