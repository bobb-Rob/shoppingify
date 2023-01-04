import React from 'react';
import { useSelector } from 'react-redux';
import ShopListName from './shoppingListcomponents/ShopListName';
import ShopListCategory from './shoppingListcomponents/ShopListCategory';

const ShoppingList = () => {
  const itemList = useSelector((state) => state.items.items);

  console.log(itemList);
  return (
    <div className="shopping-list mt-5 ">
      <ShopListName listName="Cypress" />
      <div className="overflow-hidden hover:overflow-y-auto h-[300px]">
        {
          itemList.map((category) => {
            const { id, name, items } = category;
            return <ShopListCategory key={id} categoryName={name} items={items} />;
          })
        }
      </div>
    </div>
  );
};

export default ShoppingList;
