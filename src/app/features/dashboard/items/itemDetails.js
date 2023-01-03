import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AppState } from '../../../DataProvider';
import BackArrow from '../../../commons/backArrow';
import { deleteEmptyCategory, deleteItem } from './itemSlice';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const accessToken = useSelector((state) => state.session.accessToken);
  const { displayShoppingList, itemDetails } = useContext(AppState);
  const itemId = itemDetails.id;
  const categories = items.items;
  const category = categories.find((item) => item.name === itemDetails.category_name);

  const handleDelete = async () => {
    try {
      const response = await dispatch(deleteItem({ itemId, accessToken }));
      if (response.payload.message === 'Item deleted') {
        toast.success('Item deleted successfully', {
          position: 'top-center',
        });
        if ((category.items.length - 1) < 1) {
          const categoryId = category.id;
          dispatch(deleteEmptyCategory({ categoryId, accessToken })).then((res) => {
            if (res.payload.message === 'Category deleted') {
              toast.success('Category deleted successfully', {
                position: 'top-center',
                progressClassName: 'success-toast-progress',
              });
            }
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
    displayShoppingList();
  };

  return (
    <div className="px-8 py-5 bg-white h-[100vh] relative">
      <BackArrow
        onClick={() => displayShoppingList()}
      />
      <div className="item-image border h-[190px] rounded-3xl mb-7">
        <img src={itemDetails?.image} alt={itemDetails.name} />
      </div>
      <div className="mb-1">
        <span className="text-xs text-[#C1C1C4] font-medium">name</span>
        <h2 className="text-2xl font-bold">{itemDetails?.name}</h2>
      </div>
      <div className="mb-1">
        <span className="text-xs text-[#C1C1C4] font-medium">category</span>
        <h5 className="text-lg font-bold">{itemDetails?.category_name}</h5>
      </div>
      <div className="mb-1">
        <span className="text-xs text-[#C1C1C4] font-medium">note</span>
        <p className="text-lg leading-5">{itemDetails?.note}</p>
      </div>
      <div className="absolute bottom-5 left-0 right-0 px-8 flex gap-x-2.5 justify-center">
        <div className="fixed bottom-5 bg-white flex gap-x-2.5 justify-center">
          <button
            type="button"
            className="p-4"
            onClick={() => handleDelete()}
          >
            delete
          </button>
          <button type="button" className="p-4 bg-orange text-white rounded-xl">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
