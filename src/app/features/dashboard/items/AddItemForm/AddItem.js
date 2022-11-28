/* eslint-disable */
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../DataProvider';
import Button from '../../../../reusables/Button';
import { createCategoryAndItem, createItem } from '../itemSlice';
import Select from './CreatableSelect';

const AddItem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);
  
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
      dispatch(createCategoryAndItem(dataObj));
    } else {
      // dispatch action to create new item with existing category
      dispatch(createItem({item, accessToken}));     
    }
  };
  
  return (
    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  )
}

export default AddItem;