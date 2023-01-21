/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowSmRight, HiOutlineMail } from 'react-icons/hi';
import { MdFacebook, MdOutlineLock } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from './sessionSlice';
import Checkbox from '../../commons/Checkbox';
// import { UserContext } from '../../DataProvider';

const Login = () => {
  let errorMessages = useSelector((state) => state.session.errorMessages);
  // const loading = useSelector((state) => state.session.loading);
  const [allErrors, setAllErrors] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
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

    const payload = {
      email: user.email,
      password: user.password,
    };
    dispatch(loginUser(payload));

    if (errorMessages.length > 0) {
      navigate('/');
    } else {
      return setAllErrors(errorMessages);
    }
    return null;
  };

  return (
    <section>
      <div className="user-container w-5/6 md:flex md:max-w-3xl mx-auto mt-10 md:mt-20 shadow-lg">
        <div className="p-6 order-last flex flex-col justify-center items-center bg-orange border-amber-700 grow text-white">
          <h3 className="text-2xl font-bold">Welcome to login</h3>
          <span className="my-3">
            Don&apos;t have an account?
          </span>
          <Link to="/signup" className="border border-white py-1 px-3 rounded-3xl hover:bg-white hover:text-orange font-bold">
            Sign up
          </Link>
        </div>
        <div className="px-6 py-8 order-none border-red-500 flex flex-col grow">
          <div>{allErrors}</div>
          <div className="flex w-full justify-between mb-5">
            <h2 className="text-3xl">Login</h2>
            <div className="flex items-center justify-between gap-2 text-xl text-gray-500">
              <div className="social-icons w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-full">
                <MdFacebook />
              </div>
              <div className="social-icons w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-full">
                <BsTwitter />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
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
                className="background-color-input w-full pl-10 p-2 border-bottom bg-slate-50 rounded-md focus:outline-none focus:drop-shadow-lg sm:text-sm"
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
              <span className="text-md">Login</span>
              <HiOutlineArrowSmRight className="inline-block ml-2 text-xl" />
            </button>
            <div className="mt-5">
              <Checkbox label="Remember Me" checked />
            </div>
            <div>
              <a href="www.github.com/bobb-rob" className="text-gray-500 hover:text-gray-700">Forgot Password</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
