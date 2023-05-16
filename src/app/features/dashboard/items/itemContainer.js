import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemContainerHeader from './ItemContainerHeader';
import CategoryCard from './categoryCard';
import { fetchItems } from './itemSlice';
import { fetchDefaultCategories } from '../defaultCategories/defaultCategoriesSlice';
/* eslint-disable */
const ItemContainer = () => {
  const dispatch = useDispatch();
  // const { items, loading } = useSelector((state) => state.items);
  // const { defaultCategories } = useSelector((state) => state.defaultCategory);
  const accessToken = useSelector((state) => state.session.accessToken);
  const [categories, setCategories] = useState([]);

  const handleCategories = (itemsData) => {
    const { requestStatus } = itemsData.meta;
    if (requestStatus === 'fulfilled') {
      setCategories(itemsData.payload);
    }
  };

  useEffect(() => {   
    if (accessToken) {
      dispatch(fetchItems(accessToken)).then(handleCategories);
    } else {
      dispatch(fetchDefaultCategories()).then(handleCategories);
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
