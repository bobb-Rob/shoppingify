import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllList } from './historySlice';

const History = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  return (
    <div className="border border-orange bg-[#fff] h-[100vh]">
      History
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
