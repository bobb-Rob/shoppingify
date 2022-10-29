import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';

const Splash = () => (
  <div className="border-solid border-2 border-indigo-600 h-screen">
    <div className="splash-logo text-5xl">
      <h3>Shoppingify</h3>
    </div>
    <div className="action-btn">
      <Link
        to="/login"   
      >
        <span>Sign In</span>
      </Link>
      <Link
        to="/register"
      >
        <span>Create Account</span>
      </Link>
    </div>
    <div className="splash-icons">
      <div className="icons-wrap flex justify-center items-center">
        <FaFacebookF />
      </div>
      <div className="icons-wrap flex justify-center items-center">
        <FaLinkedinIn />
      </div>
      <div className="icons-wrap flex justify-center items-center">
        <AiOutlineGooglePlus />
      </div>
      <div className="icons-wrap flex justify-center items-center">
        <BsTwitter />
      </div>
    </div>
  </div>
);

export default Splash;
