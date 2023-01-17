import React from 'react';

const ListCompleteCancel = () => (
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

export default ListCompleteCancel;
