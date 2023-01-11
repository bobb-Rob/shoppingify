import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import ShopListName from './shoppingListcomponents/ShopListName';
import ShopListCategory from './shoppingListcomponents/ShopListCategory';
import capitalizeFirstLetter from '../../../helperFunctions/capitalizeFirstLeter';
import { fetchActiveList } from './shoppingListSlice';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const { name, items } = useSelector((state) => state.shoppingList.activeList);

  useEffect(() => {
    dispatch(fetchActiveList(accessToken));
  }, []);

  return (
    <div className="shopping-list mt-5 ">
      <ShopListName listName={capitalizeFirstLetter(name)} />
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
