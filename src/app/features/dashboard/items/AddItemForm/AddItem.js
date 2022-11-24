/* eslint-disable */
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AppState } from '../../../../DataProvider';
import Button from '../../../../reusables/Button';
import Select from './CreatableSelect';

const AddItem = () => {
  const { displayShoppingList } = useContext(AppState);
  // useForm
  const { register, control, handleSubmit,  formState: { errors } } = useForm({
    name: '',
    category: '',
    note: '',
    image: '',
  });

  const onSubmit = (data) => {
    console.log(data);
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
          {...register('imageUrl')}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Select
            {...field}
            defaultOptions={[
              { label: 'Fruits', value: 'fruits' },
              { label: 'Vegetables', value: 'vegetables' },
              { label: 'Meat', value: 'meat' },
              { label: 'Fish', value: 'fish' },
            ]}
          />}
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