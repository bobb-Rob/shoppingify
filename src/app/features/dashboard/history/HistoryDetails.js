/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import BackArrow from '../../../commons/backArrow';
import groupByCategory from '../../../commons/groupByCategory';
import formatDate from '../../../commons/historyDateFormat';

const HistoryDetails = () => {
  const history = useSelector((state) => state.history.lists);
  const navigate = useNavigate();
  const location = useLocation();
  const { id, search } = useParams();
  // const { month } = search;
  console.log(search);
  // const listsArray = history.find((list) => list.month === month);
  // const currentList = listsArray.lists.find((item) => item.id === Number(id));
  // const regroupedListBycategory = groupByCategory(currentList.records);
  // console.log(regroupedListBycategory);

  const returnToListHistory = () => {
    navigate('/history');
  };

  return (
    <div>
      <BackArrow onClick={returnToListHistory} />
      {/* <div>
        <h1>{currentList.name}</h1>
        <span>{formatDate(currentList.created_at)}</span>
      </div>
      <div>
        {regroupedListBycategory.map((category) => (
          <div key={v4()}>
            <h3>{category.categoryName}</h3>
            <div>
              {category.items.map((item) => {
                const { name, id } = item.item;
                return (
                  <div
                    className="flex rounded-xl min-w-[100px] justify-between items-center shadow-[0_2px_8px_-1px_rgba(181,181,181,1)]"
                    key={id}
                  >
                    <h3>{name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HistoryDetails;
