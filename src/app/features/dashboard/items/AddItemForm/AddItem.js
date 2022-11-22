/* eslint-disable */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppState } from '../../../../DataProvider';
import Button from '../../../../reusables/Button';
// import Select from './CreatableSelect';

const AddItem = () => {
  const { displayShoppingList } = useContext(AppState);
  // useForm
  const { register, handleSubmit,  formState: { errors } } = useForm({
    name: '',
    category: '',
    note: '',
    image: '',
  });
  
  return (
    <form className="p-5" onSubmit={handleSubmit}>
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
          {...register('imageUrl')}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        {/* <Select
          // handleChange={handleSelectChange}
          // options={categoryOptions}
          // onInputChange={onInputChange}
        /> */}
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