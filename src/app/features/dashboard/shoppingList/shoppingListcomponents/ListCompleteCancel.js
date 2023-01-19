import React, { useContext } from 'react';
import { AppState } from '../../../../DataProvider';

const ListCompleteCancel = () => {
  const { setShowModal, setActionType } = useContext(AppState);
  const openConfirmModal = (e) => {
    setActionType(e.target.textContent);
    setShowModal(true);
  };

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="h-[50.44px] w-[117.67px] hover:border hover:border-gray-300  rounded-lg"
        onClick={openConfirmModal}
      >
        Cancel
      </button>
      <button
        type="button"
        className="h-[50.44px] w-[117.67px] bg-blue hover:bg-sky-500 rounded-lg px-2 text-white text-base"
        onClick={openConfirmModal}
      >
        Complete
      </button>
    </div>
  );
};

export default ListCompleteCancel;
