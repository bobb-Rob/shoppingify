import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import capitalizeFirstLetter from '../../commons/capitalizeFirstLetter';
// import categories from './categories';
import { fetchDefaultCategories } from './gettingStartedSlice';
import WelcomePage from './Welcome';

const GettingStarted = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const userFirstName = useSelector((state) => state.session.currentUser.first_name);
  const categories = useSelector((state) => state.defaultCategory.defaultCategories);
  console.log('categories', categories);
  // replace with the actual categories slice name

  useEffect(() => {
    dispatch(fetchDefaultCategories(accessToken));
  }, [dispatch]);

  return (
    <div>
      <WelcomePage username={capitalizeFirstLetter(userFirstName)} categories={categories} />
    </div>
  );
};

export default GettingStarted;
