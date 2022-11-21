import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ItemContainerHeader from './ItemContainerHeader';
import CategoryCard from './categoryCard';
import { fetchItems } from './itemSlice';

const ItemContainer = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.items);
  const accessToken = useSelector((state) => state.session.accessToken);
  console.log(items);

  useEffect(() => {
    if (items.length <= 0 && loading === false) {
      if (accessToken) {
        dispatch(fetchItems(accessToken));
      }
    }
  }, [items]);

  return (
    <section className="grid md:grid-cols-routes bg-[#fff] h-[100vh]">
      <div>
        <ItemContainerHeader />
        <div>
          Here
          {items.map((category) => {
            // let categoryNam = category[0];
            // categoryNam = categoryNam.charAt(0).toUpperCase() + categoryNam.slice(1).toLowerCase();
            const { id, name, items} = category;
            return (
              <CategoryCard
                key={id}
                categoryName={name}
                itemsArr={items}
              />
            );
          })}
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default ItemContainer;
