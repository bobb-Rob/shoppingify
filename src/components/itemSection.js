import React from 'react';
import Button from './Button';
import ShoppingList from './ShoppingList';

const ItemSection = () => (
  <section className="Items border">
    <div className="list-top">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Didn&#39;t find what you need?</p>
        <Button name="Add item" />
      </div>
    </div>
    <div className="shopping-list">
      <ShoppingList />
    </div>
    <div className="list-bottom" />
  </section>
);

export default ItemSection;
