import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/RSidebarReducers/user/userSlice';

export const UserContext = createContext();

const DataProvider = ({children}) => {
  const dispatch = useDispatch(); 
  
  const onSubmit = (user, e) => {
    e.preventDefault();
    console.log(user)
    // dispatch(registerUser(user)).then((response) => {
    //   const { code } = response.payload.status;
    //   if (code === 200) {
    //     setUser({
    //       name: '',
    //       email: '',
    //       password: '',
    //     });
    //   }
    // });
  };

  return (
    <UserContext.Provider value={{
      dispatch, onSubmit
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default DataProvider;
