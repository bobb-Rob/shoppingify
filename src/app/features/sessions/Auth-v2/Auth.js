import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp2';
import './Auth.css';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  // A function to toggle between sign in and sign up modes
  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="auth border-l h-full pt-16 px-4">
      {isSignUp ? (
        <SignUp onToggle={handleToggle} />
      ) : (
        <SignIn onToggle={handleToggle} />
      )}
    </div>
  );
}

export default Auth;
