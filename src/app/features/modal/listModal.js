import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { AppState } from '../../DataProvider';

const listModal = () => {
  const { actionType, setShowModal } = useContext(AppState);
  const handleModalClose = () => {
    setShowModal(false);
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

listModal.propTypes = {
  actionType: PropTypes.string.isRequired,
};

export default listModal;
