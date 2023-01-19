import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../DataProvider';
import { createActiveList, updateListStatus } from '../dashboard/shoppingList/shoppingListSlice';

const listModal = () => {
  const { actionType, setShowModal } = useContext(AppState);

  const dispatch = useDispatch();
  const listId = useSelector((state) => state.shoppingList.activeList.id);
  const accessToken = useSelector((state) => state.session.accessToken);
  const userId = useSelector((state) => state.session.currentUser.id);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleListStatusChange = (newStatus) => {
    const data = {
      listId,
      newStatus: { status: newStatus },
      accessToken,
    };

    const activeList = {
      name: 'GetNewNames()',
      user_id: userId,
    };

    dispatch(updateListStatus(data)).then((response) => {
      if (response.type === 'lists/updateListStatus/fulfilled' && response.payload.status === actionType.toLowerCase()) {
        dispatch(createActiveList({ activeList, accessToken }));
      }
      handleModalClose();
    });
    // Create new list with default active status
  };

  return (
    <div
      className="flex flex-col relative w-auto my-6 mx-auto max-w-3xl border bg-white list-modal rounded-3xl p-6"
    >
      <p className="font-quicksand font-bold leading-relaxed mb-6 w-5/6">
        Are you sure that you want to
        {' '}
        <em className="text-red-500">
          {actionType.toLowerCase()}
        </em>
        {' '}
        this list?
      </p>
      <div className="self-end">
        <button
          className="px-7 py-4"
          type="button"
          onClick={handleModalClose}
        >
          back
        </button>
        <button
          type="button"
          className="px-7 py-4 bg-red-500 text-white rounded-xl"
          onClick={() => handleListStatusChange(actionType.toLowerCase())}
        >
          Yes
        </button>
      </div>
      <MdClose
        className="absolute right-6 text-xl text-grey cursor-pointer"
        onClick={handleModalClose}
      />
    </div>
  );
};

export default listModal;
