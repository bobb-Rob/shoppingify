// /* eslint-disable */
import React from 'react';
import { HiOutlineCalendar } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import BackArrow from '../../../commons/backArrow';
import groupByCategory from '../../../commons/groupByCategory';
import formatDate from '../../../commons/historyDateFormat';
import capitalizeFirstLetter from '../../../helperFunctions/capitalizeFirstLeter';

const HistoryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { records, listName, date } = location.state;
  const regroupedListBycategory = groupByCategory(records);

  const returnToListHistory = () => {
    navigate('/history');
  };

  const emptyList = (
    <h3 className="font-bold text-lg">List is empty</h3>
  );

  const listItems = regroupedListBycategory.map((category) => (
    <div key={v4()}>
      <h3 className="text-lg font-medium leading-5 mb-4">{capitalizeFirstLetter(category.categoryName)}</h3>
      <div className="flex gap-5 mb-4">
        {category.items.map((item) => {
          const { name, id, quantity } = item.item;
          return (
            <div
              className="flex px-3 py-3 rounded-xl bg-white max-w-[200px] justify-between items-center shadow-[0_2px_8px_-1px_rgba(181,181,181,1)]"
              key={id}
            >
              <h3>{name}</h3>
              <span className="w-[50px] text-sm text-orange text-right">
                {quantity}
                {' '}
                pcs
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ));

  return (
    <div className="px-16 py-10">
      <BackArrow onClick={returnToListHistory} />
      <div className="mb-6">
        <h1 className="font-bold text-2xl mb-2">{capitalizeFirstLetter(listName)}</h1>
        <div className="flex items-center gap-2 text-xs mr-4 text-gray-400">
          <HiOutlineCalendar />
          <span>{formatDate(date)}</span>
        </div>
      </div>
      <div>
        {regroupedListBycategory.length === 0 ? emptyList : listItems }
      </div>
    </div>
  );
};

export default HistoryDetails;
