/* eslint-disable */
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../DataProvider';
import Button from '../../../../reusables/Button';
import { createCategoryAndItem, createItem } from '../itemSlice';
import Select from './CreatableSelect';
import { IoCloseSharp } from 'react-icons/io5';
import { clearError } from '../itemSlice';
import { toast } from 'react-toastify';

const AddItem = () => {
  const dispatch = useDispatch();
  const { items, errorMessages } = useSelector((state) => state.items);
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);
  const { notify } = useContext(AppState);
  
  const { displayShoppingList } = useContext(AppState);
 
  const { register, control, handleSubmit,  formState: { errors } } = useForm({
    name: '',
    category: '',
    note: '',
    image: '',
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    
    const newCategory = {
      name: data.category.label,
      user_id: currentUser.id,
    }

    const item = {
      name: data.name,
      note: data.note,
      image: data.image,
      category_id: data.category.value || undefined,
      user_id: currentUser.id,
    }
    const dataObj = { newCategory, item };

    if(data.category.isNew) {
      // dispatch action to create new category and then a new item
      dispatch(createCategoryAndItem(dataObj)).then((response) => {
        if (response.type === "items/createCategoryAndItem/fulfilled") {
          toast.success('Category and Item created successfully', {
            position: 'top-center',
          });
          displayShoppingList();
        }
      });
    } else {
      dispatch(createItem({item, accessToken})).then((response) => {
        if (response.type === "items/createItem/fulfilled") {
          toast.success("Item created successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
          displayShoppingList();
        } else if (errorMessages.length === 0) {
          notify('Item creation failed. Please try again.');
        }
      });      
    }
  };
  
  return (
    <form className="p-5 border h-full " onSubmit={handleSubmit(onSubmit)}>
      {/* { show error messages if any} */}
      {errorMessages.length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <div>
            {errorMessages.map((message) => (
              <span className="block sm:inline" key={message}>
                {message}
              </span>
            ))}
          </div>          
          <IoCloseSharp className="absolute top-2 right-2 pointer" onClick={() => dispatch(clearError())} />
        </div>
      )}
      <h3>Add a new item</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter a name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          placeholder="Enter a note"
          {...register('note')}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          {...register('image')}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (<Select
            onChange={onChange}
            value={value}
            defaultOptions={items.map((item) => ({
              label: item.name,
              value: item.id,
              isNew: false,
            }))}
          />)}
        /> 
      </div>
      <div>
        <Button
          name="Cancel"
          onClick={() => displayShoppingList()}
        />
        <input
          type="submit"
          value="Save"          
        />
      </div>
      {/* <ToastContainer /> */}
    </form>
  )
}

export default AddItem;