import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';

const ErrorDisplay = ({ errorMessages, closeEvent }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative" role="alert">
    <strong className="font-bold">Error!</strong>
    <div>
      {errorMessages.map((message) => (
        <span className="block sm:inline" key={message}>
          {message}
        </span>
      ))}
    </div>
    <IoCloseSharp className="absolute top-2 right-2 cursor-pointer" onClick={closeEvent} />
  </div>
);

export default ErrorDisplay;

ErrorDisplay.propTypes = {
  errorMessages: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
  closeEvent: PropTypes.func.isRequired,
};
