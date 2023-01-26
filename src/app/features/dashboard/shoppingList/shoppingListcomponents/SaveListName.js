/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateListName } from '../shoppingListSlice';
// import PropTypes from 'prop-types';

const SaveListName = () => {
  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm({
    listName: '',
  });
  const dispatch = useDispatch();
  const listId = useSelector((state) => state.shoppingList.activeList.id);
  const accessToken = useSelector((state) => state.session.accessToken);
 
  const nameSubmit = ({ listName }, e) => {
    e.preventDefault();
    const data = {
      listId,
      newName: { name: listName },
      accessToken,
    };
    dispatch(updateListName(data));
    console.log(listName);
    reset();
  };

  return (
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
};

export default SaveListName;
