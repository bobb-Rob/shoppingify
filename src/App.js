import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/Navbar';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <SideNav />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ListContainer />} />
        </Routes>  
      </main>          
    </div>
  );
}

export default App;
