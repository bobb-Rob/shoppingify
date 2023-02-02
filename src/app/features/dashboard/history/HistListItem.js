import React from 'react';
import PropTypes from 'prop-types';

import { HiOutlineCalendar } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const HistListItem = ({
  listName, date, status, id, month, records,
}) => {
  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate(`/history/${id}/${month}`, { state: { records, listName, date } });
  };

  return (
    <div
      className="flex justify-between items-center cursor-pointer shadow-[0_2px_8px_-1px_rgba(181,181,181,1)] rounded-xl p-4 pr-2 mt-4"
      role="presentation"
      onClick={handleListItemClick}
    >
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
};

HistListItem.propTypes = {
  listName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  records: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};

export default HistListItem;
