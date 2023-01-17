import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { IoCloseSharp } from 'react-icons/io5';
import ShopListName from './shoppingListcomponents/ShopListName';
import ShopListCategory from './shoppingListcomponents/ShopListCategory';
import capitalizeFirstLetter from '../../../helperFunctions/capitalizeFirstLeter';
import { fetchActiveList, shopListClearError } from './shoppingListSlice';

const ShoppingList = () => {
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
        <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <div>
            {errorMessages.map((message) => (
              <span className="block sm:inline" key={message}>
                {message}
              </span>
            ))}
          </div>
          <IoCloseSharp className="absolute top-2 right-2 pointer" onClick={() => dispatch(shopListClearError())} />
        </div>
      )}
      <div className="overflow-hidden hover:overflow-y-auto h-[300px]">
        {
          items.map((category) => {
            const { name, items } = category;
            return <ShopListCategory key={v4()} categoryName={name} items={items} />;
          })
        }
      </div>
    </div>
  );
};

export default ShoppingList;
