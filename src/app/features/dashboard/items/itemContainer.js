import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemContainerHeader from './ItemContainerHeader';
import CategoryCard from './categoryCard';
import { fetchItems } from './itemSlice';
import { fetchDefaultCategories } from '../defaultCategories/defaultCategoriesSlice';
/* eslint-disable */
const ItemContainer = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.items);
  const { defaultCategories } = useSelector((state) => state.defaultCategory);
  const accessToken = useSelector((state) => state.session.accessToken);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (items.length <= 0 && loading === false) {
      if (accessToken) {
        dispatch(fetchItems(accessToken)).then((data) => {
          console.log(data);
          const { requestStatus } = data.meta;
          if (requestStatus === 'fulfilled') {
            setCategories(data.payload);
          }
        });
      } else {
        dispatch(fetchDefaultCategories()).then((data) => {
          console.log(data);
          const { requestStatus } = data.meta;
          if (requestStatus === 'fulfilled') {
            setCategories(data.payload);
          }
        });
      }
    }
  }, []);

  return (
    <section
      className="bg-white pt-2 h-[100vh] relative overflow-y-hidden hover:overflow-y-auto focus:overflow-y-auto active:overflow-y-auto"
    >
      <ItemContainerHeader />
      <div className="mt-6 md:mt-20 p-5 md:pl-16">
        {categories.map((category) => {
          const { id, name, items } = category;
          return (
            <CategoryCard
              key={id}
              catId={id}
              categoryName={name}
              itemsArr={items}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ItemContainer;
