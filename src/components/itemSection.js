import React from 'react';
import Button from './Button';
import ShoppingList from './ShoppingList';

const ItemSection = () => {
  return (
    <section className='Items'>
      <div className="list-top">
           <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Didn't find what you need?</p>
            <Button name="Add item" />
          </div>        
      </div>
      <div className="shopping-list">
        <ShoppingList />
      </div>
      <div className="list-bottom"></div>      
    </section>
  );
};

export default ItemSection;