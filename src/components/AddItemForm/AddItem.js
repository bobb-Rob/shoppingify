/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../reusables/Button';
import { hideAddItemForm } from '../../redux/AddItemReducers/AddItemReducers';
import Select from './CreatableSelect';

const AddItem = () => {
  const dispatch = useDispatch();
  return (
    <form className="p-5">
      <h3>Add a new item</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter a name"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          placeholder="Enter a note"
          id="note"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          id="imageUrl"
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Select />
      </div>
      <div>
        <Button
          name="Cancel"
          onClick={() => dispatch(hideAddItemForm())}
        />
        <input type="submit" value="Save" />
      </div>
    </form>
  )
}

export default AddItem;