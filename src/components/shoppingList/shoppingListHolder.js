import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import ShoppingList from './ShoppingList';
import Button from '../reusables/Button';
import { showAddItemForm } from '../../redux/AddItemReducers/AddItemReducers';
import sourceBottle from '../../assets/source.svg';

const ShoppingListHolder = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-peach px-12 py-10 h-[100vh]">
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
            onClick={() => dispatch(showAddItemForm())}
          />
        </div>
      </div>
      <div className="shopping-list">
        <ShoppingList />
      </div>
      <div className="list-bottom" />
    </div>
  );
};

export default ShoppingListHolder;
