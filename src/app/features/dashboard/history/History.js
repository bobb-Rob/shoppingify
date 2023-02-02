import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import formatDate from '../../../commons/historyDateFormat';
import HistListItem from './HistListItem';
import { fetchAllList } from './historySlice';

const History = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const lists = useSelector((state) => state.history.lists);

  useEffect(() => {
    dispatch(fetchAllList(accessToken));
  }, []);

  return (
    <div className="bg-[#fff] h-full px-10 py-7">
      <h3 className="font-quicksand font-bold text-[26px] leading-8">Shopping History</h3>
      <div>
        {lists.map((list) => (
          <div key={v4()}>
            <h4 className="text-xs font-bold mt-6">{list.month}</h4>
            <div>
              {list.lists.map((innerList) => (
                <HistListItem
                  key={innerList.id}
                  date={formatDate(innerList.created_at)}
                  listName={innerList.name}
                  status={innerList.status}
                  id={innerList.id}
                  month={list.month}
                  records={innerList.records}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
