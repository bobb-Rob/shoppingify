/* eslint-disable */
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../DataProvider';
import Button from '../../../../reusables/Button';
import { createCategory, createCategoryAndItem, createItem } from '../itemSlice';
import Select from './CreatableSelect';
import { IoCloseSharp } from 'react-icons/io5';
import { clearError } from '../itemSlice';
import { toast } from 'react-toastify';
import AddItemForm from './AddItemForm';

const AddItem = () => {
  const dispatch = useDispatch();
  const { items, errorMessages } = useSelector((state) => state.items);
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);
  const { notify } = useContext(AppState);

  const { displayShoppingList } = useContext(AppState);
 
  const { register, control, handleSubmit,  formState } = useForm({
    name: '',
    category: '',
    note: '',
    image: '',
  });

  const onSubmit = ({ name, image, note, category }, e) => {
    e.preventDefault();
    
    const newCategory = {
      name: category.label.toLowerCase(),
      user_id: currentUser.id,
    }

    const newItem = {
      name: name.toLowerCase(),
      note,
      image,
      category_id: category.value || undefined, // This is the point that the co
      user_id: currentUser.id,
    }

    if(category.isNew) {
      dispatch(createCategory({ newCategory, accessToken })).then((response) => {
        if(response.meta.requestStatus === 'fulfilled') {
          newItem.category_id = response.payload?.id;
          dispatch(createItem({newItem, accessToken})).then((res) => {
            if (res.type === "items/createItem/fulfilled") {
                toast.success('Category and Item created successfully', {
                  position: 'top-center',
                });
                displayShoppingList();
              }
          })
        } else {
          console.log(response);
        }
      });
    } else {
      console.log(newItem);
      dispatch(createItem({newItem, accessToken}))
      .then((response) => {
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
    <form className="pt-5 px-5 pb-0 h-full relative overflow-scroll" onSubmit={handleSubmit(onSubmit)}>
      {/* show error messages if any */}
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
      <h3 className="text-lg font-bold mt-3">Add a new item</h3>
      <AddItemForm
        register={register}
        formState={formState}
      />
  
      <div className="mt-[2.5vh]" >
        <label className="text-sm" htmlFor="category">Category</label><br/>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            console.log(value);
            return (
              <Select
                onChange={onChange}
                value={value}
                defaultOptions={items.map((item) => ({
                  label: item.name,
                  value: item.id,
                  isNew: false,
                }))}
          />)}}
        /> 
      </div>
      <div className="absolute bottom-0 right-0 left-0 flex justify-center p-4" >
        <Button
          name="Cancel"
          onClick={() => displayShoppingList()}
        />
        <input
          className="hover:cursor-pointer bg-orange text-white p-4 rounded-xl"
          type="submit"
          value="Save"          
        />
      </div>     
    </form>
  )
}

export default AddItem;