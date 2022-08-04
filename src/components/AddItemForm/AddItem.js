/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../reusables/Button';
import { hideAddItemForm } from '../../redux/RSidebarReducers/RSidebarReducers';
import { updateItems, addtoList } from '../../redux/ItemList/ItemListReducers';
import Select from './CreatableSelect';
import getCategories from '../../helperFunctions/getCategories';

const AddItem = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.list);
 
  const { name, note, image } = state.item;

  const categories = getCategories(state);
  console.log(categories);
  const colourOptions = [
    {
      value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
    },
    {
      value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
    },
  ];

  const handleChange = (e) => {
    const input = e.target.value;
    const inputName = e.target.name;
    const newItem = { ...state.item };
    
    dispatch(updateItems({ ...newItem, [inputName]: input}));
  };

  const handleSelectChange = (inputValue, actionMeta) => {
    console.log(inputValue);
    console.log(actionMeta.action);
    const newItem = { ...state.item };
    if(inputValue.value) {
      dispatch(updateItems({ ...newItem, category: inputValue.value}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addtoList());
  };

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h3>Add a new item</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter a name"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          placeholder="Enter a note"
          name="note"
          id="note"
          value={note}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          name="image"
          id="imageUrl"
          value={image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Select
          handleChange={handleSelectChange}
          options={colourOptions}
        />
      </div>
      <div>
        <Button
          name="Cancel"
          onClick={() => dispatch(hideAddItemForm())}
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