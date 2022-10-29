import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import SideNav from './navigation/Navbar';
import Splash from './user/Splash';
import Login from './user/Login';
import Registration from './user/Registration';

const Routing = () => {
  const routes = [
    { path: '/', element: <Splash /> },
  ];
  console.log(routes);
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
      {/* <SideNav /> */}
      {/* <main className="container">
        <Routes>
          <Route path="" element={<ListContainer />}>
            <Route path="" element={<ItemSection />} />
          </Route>
          <Route path="/history" element={<History />}>
            <Route path="" element={<ItemSection />} />
          </Route>
          <Route path="/analysis" element={<Analysis />}>
            <Route path="" element={<ItemSection />} />
          </Route>
        </Routes>
        </main> */}
    </>
  );
};

export default Routing;
