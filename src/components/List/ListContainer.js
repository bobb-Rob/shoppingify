import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import { item2DArray } from '../../helperFunctions/getCategories';

import CategoryCard from './categoryCard';

const ListContainer = () => {
  const state = useSelector((state) => state.list);
  const items2d = item2DArray(state);

  return (
    <section
      className="grid md:grid-cols-routes bg-[#fff] h-[100vh]"
    >
      <div>
        <Header />
        <div>
          {items2d.map((categoryArray) => {
            const categoryName = categoryArray[0].category;
            return (
              <CategoryCard
                key={uuidv4()}
                categoryName={categoryName}
                categoryArray={categoryArray}
              />
            );
          })}
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default ListContainer;
