import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import ItemContainerHeader from './ItemContainerHeader';
// import { item2DArray } from '../../../helperFunctions/getCategories';

import CategoryCard from './categoryCard';

const ItemContainer = () => {
  const shoppingList = useSelector((state) => state.shoppingList);

  return (
    <section
      className="grid md:grid-cols-routes bg-[#fff] h-[100vh]"
    >
      <div>
        <ItemContainerHeader />
        <div>
          Here
          {/* {items2d.map((categoryArray) => {
            let categoryNam = categoryArray[0].category;
            categoryNam = categoryNam.charAt(0).toUpperCase() + categoryNam.slice(1).toLowerCase();
            return (
              <CategoryCard
                key={uuidv4()}
                categoryName={categoryNam}
                categoryArray={categoryArray}
              />
            );
          })} */}
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default ItemContainer;
