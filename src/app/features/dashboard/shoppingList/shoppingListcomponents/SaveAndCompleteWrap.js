import React from 'react';
import { useSelector } from 'react-redux';
import ListCompleteCancel from './ListCompleteCancel';
import SaveListName from './SaveListName';

const SaveAndCompleteWrap = () => {
  const editingMode = useSelector((state) => state.shoppingList.editingMode);

  return (
    <div className="list-bottom h-[110.98px] bg-white flex justify-center items-center">
      { editingMode ? <SaveListName /> : <ListCompleteCancel /> }
    </div>
  );
};

export default SaveAndCompleteWrap;
