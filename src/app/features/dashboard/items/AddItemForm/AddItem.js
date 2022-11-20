/* eslint-disable */
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../reusables/Button';
import Select from './CreatableSelect';


const AddItem = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.list);
 
  // const { name, note, image, category } = state.item;

  // const categoryOptions = getCategoryOptions(getCategories(state)); 

  // const handleChange = (e) => {
  //   const input = e.target.value;
  //   const inputName = e.target.name;
  //   const newItem = { ...state.item };    
  //   dispatch(updateItems({ ...newItem, [inputName]: input}));
  // };

  // const handleSelectChange = (newValue) => {
  //   console.log(newValue);
  //   const newItem = { ...state.item };
  //   if(newValue === null) return;
  //   if(newValue.value) {
  //     dispatch(updateItems({ ...newItem, category: newValue.value}));
  //   }
  // };

  // const onInputChange = (inputValue) => {

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addtoList());
  // };

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
        
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          placeholder="Enter a note"
          name="note"
          id="note"
          // value={note}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          name="image"
          id="imageUrl"
          // value={image}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Select
          // handleChange={handleSelectChange}
          // options={categoryOptions}
          // onInputChange={onInputChange}
        />
      </div>
      <div>
        <Button
          name="Cancel"
          // onClick={() => dispatch(hideAddItemForm())}
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