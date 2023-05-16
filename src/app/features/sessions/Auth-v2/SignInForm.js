import React from 'react';
import propTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */

function SignInForm({ onSubmit, register, errors }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
          className={`block w-full px-4 py-2 text-gray-700 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:border-amber-500 mb-4`}
        />
        {errors.email && (
          <p className="text-red-500">Email is required</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
          className={`block w-full px-4 py-2 text-gray-700 border ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:border-amber-500 mb-4`}
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
      </div>

      <button
        className="bg-orange hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-md"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}

SignInForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  errors: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
  }).isRequired,
};

export default SignInForm;
