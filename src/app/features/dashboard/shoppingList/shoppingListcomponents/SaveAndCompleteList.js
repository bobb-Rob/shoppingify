// eslint-disable
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const SaveAndCompleteList = () => {
  const [listName, setListName] = useState('');

  const handleChange = () => {
    setListName('');
  };

  const handleSubmit = (e) => {
    e.preventDefaut();
  };

  return (
    <div className="list-bottom h-[130.98px] bg-white absolute left-0 right-0 bottom-0 flex justify-center items-center">
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
    </div>
  );
};

export default SaveAndCompleteList;
