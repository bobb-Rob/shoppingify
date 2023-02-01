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
    <div className="border border-orange bg-[#fff] h-[100vh]">
      <h3>Shopping History</h3>
      <div>
        {lists.map((list) => (
          <div key={v4()}>
            <h4>{list.month}</h4>
            <div>
              {list.lists.map((innerList) => (
                <HistListItem
                  key={innerList.id}
                  date={formatDate(innerList.created_at)}
                  listName={innerList.name}
                  status={innerList.status}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => dispatch(fetchAllList(accessToken))}
        className="border"
      >
        get List
      </button>
    </div>
  );
};

export default History;
