import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { UserContext } from '../DataProvider';
import { loginUser } from '../../redux/user/userSlice';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
        navigate('/ap1/v1/shoppingList');
      }, 3000);
    } else if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [isSubmitted, reset, navigate, isError]);

  const onSubmit = (user, e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginUser(user)).then((response) => {
      console.log(response);
      if (response.type === 'user/loginUser/fulfilled') {
        if (response.payload.status.code === 200) {
          setIsSubmitted(true);
        } else {
          setIsError(true);
          console.log(response.payload.status.error);
          setErrorMessage(response.payload.status.error);
        }
      } else {
        setIsError(true);
      }
    });
  };

  const disPlayError = () => errorMessage.map((error, index) => (<p key={index}>{error}</p>));

  return (
    <div className="user-container flex flex-col space-between">
      <div className="user-form-wrap flex flex-col">
        <div>
          <p>{ isSubmitted && 'Login successful' }</p>
          { isError && disPlayError() }
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
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
        </form>
      </div>
      <div>
        <span>
          Don't have an account?
          <Link to="/register" className="">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
