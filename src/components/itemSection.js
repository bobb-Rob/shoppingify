import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './reusables/Button';
import ShoppingList from './ShoppingList';
import sourceBottle from '../assets/source.svg';

const ItemSection = () => {
  const [fill, setFill] = useState(false);

  return (
    <section className="Items ">
      <div className="bg-peach px-12 py-10">
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
            <Link to="add-item">
              <Button
                klassName="bg-white text-black rounded-xl mt-2"
                name="Add item"
              />
            </Link>
          </div>
        </div>
        <div className="shopping-list">
          <ShoppingList />
        </div>
        <div className="list-bottom" />
      </div>
    </section>
  );
};

export default ItemSection;
