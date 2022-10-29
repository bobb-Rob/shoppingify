import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { signUpUser } from '../../redux/SignInSignUp/authenticationSlice';
import BackArrow from '../utils/BackArrow';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const user1 = {
      ...user,
      [name]: value,
    };
    setUser(user1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(user)).then((response) => {
      const { code } = response.payload.status;
      if (code === 200) {
        setUser({
          name: '',
          email: '',
          password: '',
        });
      }
    });
  };

  return (
    <div className="sign-in-container">
      <BackArrow />
      <div className="sign-in-form-wrap">
        <h2>Create Account</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="name">Full name</label>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign up</button>
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

export default SignUpForm;
