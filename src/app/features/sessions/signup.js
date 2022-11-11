import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowSmRight, HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const errorMessages = [];
  const loading = false;
  const [allErrors, setAllErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (errorMessages.length > 0) {
      setAllErrors(errorMessages);
      errorMessages = [];
      // dispatch(resetErrorState());
    }
  });

  const onSubmit = async (user, e) => {
    e.preventDefault();
    setAllErrors([]);
    console.log(user);
    const payload = {
      email: user.email,
      password: user.password,
    };
    // const response = await dispatch(login(payload));
    const response = [];
    console.log(response);
    if (errorMessages.length > 0) {
      navigate('/');
    } else {
      return setAllErrors(errorMessages);
    }
  };

  return (
    <div className="user-container flex flex-col space-between">
      <div className="user-form-wrap flex flex-col">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mt-6 mb-4 ">
            <label
              htmlFor="password"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <MdOutlineLock />
            </label>
            <input
              type="text"
              id="firstName"
              {...register('first_name', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'first name must be at least 2 characters long',
                },
              })}
              placeholder="First Name"
              className="w-full pl-10 p-2 border-bottom rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
            <p className="invalid mb-2">{errors.first_name?.message}</p>
          </div>
          {/* <div className="relative mt-6 mb-4 ">
            <label
              htmlFor="password"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <MdOutlineLock />
            </label>
            <input
              type="text"
              id="password"
              {...register('password', {
                required: 'Password must be provided',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              placeholder="Password"
              className="w-full pl-10 p-2 border-bottom rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
            <p className="invalid mb-2">{errors.password?.message}</p>
          </div>
          <div className="relative mt-6 mb-4 ">
            <label
              htmlFor="password"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <MdOutlineLock />
            </label>
            <input
              type="text"
              id="password"
              {...register('password', {
                required: 'Password must be provided',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              placeholder="Password"
              className="w-full pl-10 p-2 border-bottom rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
            <p className="invalid mb-2">{errors.password?.message}</p>
          </div> */}
          <div className="relative mb-4 ">
            <label
              htmlFor="email"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <HiOutlineMail />
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email must be provided' })}
              placeholder="Email"
              className="w-full pl-10 p-2 border-bottom rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
            <p className="invalid mb-2">{errors.email?.message}</p>
          </div>
          <div className="relative mt-6 mb-4 ">
            <label
              htmlFor="password"
              className="flex items-center z-10 gap-x-2 text-xl absolute px-3 py-2"
            >
              <MdOutlineLock />
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password must be provided',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              placeholder="Password"
              className="w-full pl-10 p-2 border-bottom rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
            />
            <p className="invalid mb-2">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="self-end bg-gradient-to-r from-[#f7c659] to-[#fda33c] text-white w-[120px] py-2 px-2 rounded-3xl mt-6 flex items-center justify-center"
          >
            <span className="text-md">Create Account</span>
            <HiOutlineArrowSmRight className="inline-block ml-2 text-xl" />
          </button>
        </form>
      </div>
      <div>
        <span>
          Already have an account?
          <Link to="/login" className="">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
