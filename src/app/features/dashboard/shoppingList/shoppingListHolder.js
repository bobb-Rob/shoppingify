import React, { useContext } from 'react';
import ShoppingList from './ShoppingList';
import Button from '../../../reusables/Button';
import sourceBottle from '../../../../assets/source.svg';
import { AppState } from '../../../DataProvider';
import SaveAndCompleteWrap from './shoppingListcomponents/SaveAndCompleteWrap';

const ShoppingListHolder = () => {
  const { displayAddItemForm } = useContext(AppState);

  return (
    <div className="flex flex-col  bg-peach h-[100vh] relative">
      <div className="bg-peach px-10 pt-10">
        <div className="list-top text-white flex bg-[#80485B] h-[129.91px] rounded-2xl">
          <div className="relative w-[78.67px]">
            <img
              className="absolute -top-4 left-2"
              src={sourceBottle}
              alt="source"
            />
          </div>
          <div className="py-4 pl-9 font-bold">
            <p>Didn&#39;t find what you need?</p>
            <Button
              klassName="bg-white text-black rounded-xl mt-2"
              name="Add item"
              onClick={() => displayAddItemForm()}
            />
          </div>
        </div>
        <ShoppingList />
      </div>
      <SaveAndCompleteWrap />
    </div>
  );
};

export default ShoppingListHolder;
