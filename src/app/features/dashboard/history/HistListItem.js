import React from 'react';
import PropTypes from 'prop-types';

import { HiOutlineCalendar } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';

const HistListItem = ({ listName, date, status }) => (
  <div className="flex justify-between items-center cursor-pointer shadow-[0_2px_8px_-1px_rgba(181,181,181,1)] rounded-xl p-4 pr-2 mt-4">
    <h3
      className="font-medium leading-[20px] "
    >
      {listName}
    </h3>
    <div className="flex items-center">
      <div className="flex items-center gap-2 text-xs mr-4 text-gray-400">
        <HiOutlineCalendar />
        <span>{date}</span>
      </div>
      <div
        className={
          status === 'complete'
            ? 'border border-blue text-blue text-xs w-[90px] px-2 py-1 rounded-xl flex justify-center'
            : 'border border-myRed text-myRed text-xs w-[90px] px-2 py-1 rounded-xl flex justify-center'
        }
      >
        {status === 'complete' ? 'Completed' : 'Cancelled'}
      </div>
      <MdNavigateNext className="text-orange ml-2 text-2xl cursor-pointer" />
    </div>
  </div>
);

HistListItem.propTypes = {
  listName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HistListItem;
