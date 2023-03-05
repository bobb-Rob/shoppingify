import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemContainerHeader from './ItemContainerHeader';
import CategoryCard from './categoryCard';
import { fetchItems } from './itemSlice';

const ItemContainer = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.items);
  const accessToken = useSelector((state) => state.session.accessToken);

  useEffect(() => {
    if (items.length <= 0 && loading === false) {
      if (accessToken) {
        dispatch(fetchItems(accessToken));
      }
    }
  }, []);

  return (
    <section
      className="bg-white pt-2 h-[100vh] relative overflow-y-hidden hover:overflow-y-auto focus:overflow-y-auto active:overflow-y-auto"
    >
      <ItemContainerHeader />
      <div className="mt-6 md:mt-20 p-5 md:pl-16">
        {items.map((category) => {
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
