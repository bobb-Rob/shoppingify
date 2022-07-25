import React from 'react';
import Button from './Button';

const ItemSection = () => {
  return (
    <section className='Items'>
      <div className="list-top">
           <div>
            <img src="" alt="" />
          </div>
          <div>
            <p></p>
            <Button name="Add item" />
          </div>        
      </div>
      <div className="shopping-list"></div>
      <div className="list-bottom"></div>      
    </section>
  );
};

export default ItemSection;