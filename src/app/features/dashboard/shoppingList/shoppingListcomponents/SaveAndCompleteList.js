/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateListName } from '../shoppingListSlice';
// import PropTypes from 'prop-types';

const SaveAndCompleteList = () => {
  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm({
    listName: '',
  });
  const dispatch = useDispatch();
  const editingMode = useSelector((state) => state.shoppingList.editingMode);
  // const handleChange = (e) => {
  //   setListName(e.target.value);
  // };

  const nameSubmit = ({ listName }, e) => {
    e.preventDefault();
    dispatch(updateListName(listName));
    reset();
  };

  const save = (
    <form
      onSubmit={handleSubmit(nameSubmit)}
      className=" h-[51.25px] relative flex justify-center items-center border border-red border border-orange border-2 rounded rounded-[15px]"
    >
      <input
        type="text"
        name="listName"
        {...register('listName', { required: "field must not be empty "}) }
        placeholder="Enter a name"
        className="h-full rounded text-sm rounded-[12px] focus:outline-none pl-4 focus:ring focus:ring-amber-400"
      />
      <button
        type="submit"
        className="px-4 bg-orange h-full rounded rounded-[12px] text-white"
      >
        Save
      </button>
      {errors?.listName && (<p className="absolute bottom-[-25px] text-red-500 left-0">Field must not be empty</p>) }
    </form>
  );

  const cancelOrComplete = (
    <div className="flex gap-4">
      <button
        type="button"
        className="h-[50.44px] w-[117.67px] hover:border hover:border-gray-300  rounded-lg"
      >
        Cancel
      </button>
      <button
        type="button"
        className="h-[50.44px] w-[117.67px] bg-blue hover:bg-sky-500 rounded-lg px-2 text-white text-base"
      >
        Complete
      </button>
    </div>
  );

  return (
    <div className="list-bottom h-[110.98px] bg-white flex justify-center items-center">
      { editingMode ? save : cancelOrComplete }
    </div>
  );
};

export default SaveAndCompleteList;
