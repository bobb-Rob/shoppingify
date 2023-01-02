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
    <div className="flex ">
      <button
        type="button"
        className="h-[60px] max-w-content"
      >
        Cancel
      </button>
      <button
        type="button"
        className="h-[60px] max-w-content"
      >
        Complete
      </button>
    </div>
  );

  return (
    <div className="list-bottom h-[130.98px] bg-white absolute left-0 right-0 bottom-0 flex justify-center items-center">
      { editingMode ? save : cancelOrComplete }
    </div>
  );
};

export default SaveAndCompleteList;
