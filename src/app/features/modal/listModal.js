import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppState } from '../../DataProvider';

const listModal = () => {
  const { actionType, setShowModal } = useContext(AppState);
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className="relative w-auto my-6 mx-auto max-w-3xl border bg-white list-modal"
    >
      <p>
        Are you sure that you want to
        {' '}
        {actionType}
        {' '}
        this list?
      </p>
      <div>
        <button
          type="button"
          onClick={handleModalClose}
        >
          back
        </button>
        <button
          type="button"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

listModal.propTypes = {
  actionType: PropTypes.string.isRequired,
};

export default listModal;
