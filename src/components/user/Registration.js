import React, { useContext } from 'react';
import { UserContext } from '../DataProvider';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import BackArrow from '../reusables/BackArrow';

const Registration = () => {
  const { handleChange, onSubmit, user } = useContext(UserContext);
  
  return (
    <div className="user-container flex flex-col space-between">
      <BackArrow classNam={"register-back-btn"} />
      <div className="user-form-wrap flex flex-col">
        <h2>Create Account</h2>
        <form onSubmit={onSubmit}>
          <div className="relative mb-4 mt-6 border-bottom">
            <label
              htmlFor="name"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <HiOutlineUser />
            </label>           
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              className="w-full pl-10 p-2 rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
              placeholder='Full name'
            />
          </div>
          <div className="relative mt-6 mb-4 border-bottom">            
            <label
              htmlFor="email"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <HiOutlineMail />
            </label>           
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder='Email'
              className="w-full pl-10 p-2 rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
          </div>
          <div className="relative mt-6 mb-4 border-bottom">
            <label
              htmlFor="password"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <MdOutlineLock />
            </label>   
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder='Password'
              className="w-full pl-10 p-2 rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className='self-end bg-gradient-to-r from-[#f7c659] to-[#fda33c] text-white w-[120px] py-2 px-2 rounded-3xl mt-6 flex items-center justify-center'
          >
            <span className='text-md'>Sign up</span>
            <HiOutlineArrowSmRight className='inline-block ml-2 text-xl' />
          </button>
        </form>
      </div>
      <div>
        <span>
          Already have an account?
          <Link to="/login" className="">Sign in</Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;
