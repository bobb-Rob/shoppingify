import React, { useState } from 'react';
import propTypes from 'prop-types';

function SignUp({ onToggle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // A function to handle the sign up form submission
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: add logic to sign up the user with name, email and password
    console.log('Signing up with', name, email, password);
  }

  return (
    <div className="sign-up">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          id="lastName"
          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
          type="text"
          placeholder="Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-orange hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-6 mb-4 text-gray-600">
        Already have an account?
        {' '}
        <button
          className="text-orange hover:text-amber-400 focus:outline-none"
          type="button"
          onClick={onToggle}
        >
          Sign in here
        </button>
      </p>
    </div>
  );
}

export default SignUp;

SignUp.propTypes = {
  onToggle: propTypes.func.isRequired,
};
