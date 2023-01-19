import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppState } from '../../DataProvider';

const Modal = ({ children }) => {
  const { setShowModal } = useContext(AppState);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDOM.createPortal(
    <div
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none my-modal"
      ref={modalRef}
      onClick={closeModal}
      role="presentation"
    >
      {children}
      {/* <div className="modal">
        <h2>This is a Modal</h2>
        <button onClick={() => setShowModal(false)}>X</button>
      </div> */}
    </div>,
    document.getElementById('portal'),
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
