import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/Navbar';
import ListContainer from './components/ListContainer';
import History from './components/History';
import Analysis from './components/Analysis';
import ItemSection from './components/itemSection';

function App() {
  return (
    <div className="App">
      <SideNav />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ListContainer />} />
          <Route path='/history' element={<History />} />
          <Route path='/analysis' element={<Analysis />} />
        </Routes>  
      </main>
       <ItemSection />
    </div>
  );
}

export default App;
