import React, { useState } from 'react';
import propTypes from 'prop-types';

function SignIn({ onToggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // A function to handle the sign in form submission
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: add logic to sign in the user with email and password
    console.log('Signing in with', email, password);
  }

  return (
    <div className="sign-in border border-gray px-4 py-2">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 mb-4"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-orange hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p className="text-center mt-6 mb-4 text-gray-600">
        Don&apos;t have an account?
        {' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-orange hover:text-amber-400 focus:outline-none"
        >
          Sign Up Here
        </button>
      </p>
    </div>
  );
}

export default SignIn;

SignIn.propTypes = {
  onToggle: propTypes.func.isRequired,
};
