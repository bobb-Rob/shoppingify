import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <section className="bg-[#f9f9f9] h-[100vh] p-5 md:pl-16">  
        <ItemContainerHeader />
        <div className="mt-6">
          {items.map((category) => {
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
    </section>
  );
};

export default ItemContainer;
