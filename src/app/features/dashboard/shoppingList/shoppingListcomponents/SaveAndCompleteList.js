// eslint-disable
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const SaveAndCompleteList = () => {
  const [listName, setListName] = useState('');
  const editingMode = useSelector((state) => state.shoppingList.editingMode);

  const handleChange = () => {
    setListName('');
  };

  const handleSubmit = (e) => {
    e.preventDefaut();
  };

  const save = (
    <form
      onSubmit={handleSubmit}
      className=" h-[61.25px] flex justify-center items-center border border-red border border-orange border-2 rounded rounded-[15px]"
    >
      <input
        type="text"
        value={listName}
        onChange={handleChange}
        placeholder="Enter a name"
        className="h-full rounded text-sm rounded-[12px] focus:outline-none pl-4 focus:ring focus:ring-amber-400"
      />
      <button
        type="submit"
        className="px-4 bg-orange h-full rounded rounded-[12px] text-white"
      >
        Save
      </button>
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
