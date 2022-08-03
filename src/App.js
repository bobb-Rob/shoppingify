import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/Navbar';
import ListContainer from './components/List/ListContainer';
import History from './components/History';
import Analysis from './components/Analysis';
import ItemSection from './components/itemSection';
import './styles/App.css';

function App() {
  return (
    <div className="grid md:grid-cols-desktop font-quicksand">
      <SideNav />
      <main className="container">
        <Routes>
          <Route path="/" element={<ListContainer />}>
            <Route path="/" element={<ItemSection />} />
          </Route>
          <Route path="/history" element={<History />}>
            <Route path="" element={<ItemSection />} />
          </Route>
          <Route path="/analysis" element={<Analysis />}>
            <Route path="" element={<ItemSection />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
