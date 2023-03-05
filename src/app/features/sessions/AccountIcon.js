import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AccountIcon = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hideDropDown = () => {
    setTimeout(() => {
      setShowDropDown(false);
    }, 500); // add a delay of 0.5 seconds before hiding the dropdown
  };

  return (
    <>
      <div className="relative">
        <div
          className="flex items-center justify-center rounded-full bg-slate-100 hover:bg-gray-200 cursor-pointer w-10 h-10 mr-3"
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <BsPerson
            size={22}
            className="text-grey"
          />
        </div>
        {showDropDown && (
          <div
            className="absolute shadow right-1 top-10 p-3 min-w-max bg-white rounded-md transition duration-2500 ease-in-out"
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={hideDropDown}
          >
            <a href="/" className="hover:text-orange w-[100%]">
              Logout
            </a>
            <br />
            <Link to="/profile" className="hover:text-orange  w-[100%]">
              Edit Profile
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountIcon;
