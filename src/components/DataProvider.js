import React, { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/RSidebarReducers/user/userSlice';

export const UserContext = createContext();

const DataProvider = ({children}) => {
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
    dispatch(registerUser(user)).then((response) => {
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
    <UserContext.Provider value={{
      dispatch, handleChange, onSubmit, user
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default DataProvider;
