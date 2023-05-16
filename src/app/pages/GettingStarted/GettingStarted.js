import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import capitalizeFirstLetter from '../../commons/capitalizeFirstLetter';
// import { fetchCurrentUser } from '../../features/sessions/sessionSlice';
// import categories from './categories';
import { fetchDefaultCategories } from './gettingStartedSlice';
import WelcomePage from './Welcome';

const GettingStarted = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 'User';
  const userFirstName = capitalizeFirstLetter(currentUser.first_name);
  const categories = useSelector((state) => state.defaultCategory.defaultCategories);
  console.log('categories', userFirstName);
  // replace with the actual categories slice name

  useEffect(() => {
    // dispatch(fetchCurrentUser(accessToken));
    const prevAccessToken = accessToken;
    dispatch(fetchDefaultCategories(accessToken));
    return () => {
      if (prevAccessToken !== accessToken) {
        // dispatch(fetchCurrentUser(accessToken));
        console.log('accessToken changed');
      }
    };
  }, [dispatch, accessToken]);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser(accessToken));
  //   // dispatch(fetchDefaultCategories(accessToken));
  //   const prevAccessToken = accessToken;

  //   return () => {
  //     if (prevAccessToken !== accessToken) {
  //       // dispatch(fetchCurrentUser(accessToken));
  //       console.log('accessToken changed');
  //     }
  //   };
  // }, [dispatch, userFirstName, accessToken]);

  return (
    <div>
      <WelcomePage username={userFirstName} categories={categories} />
    </div>
  );
};

export default GettingStarted;
