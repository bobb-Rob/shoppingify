import React from 'react';
import Routing from './components/Routing';
import DataProvider from './components/DataProvider';
import './styles/App.css';
import './styles/user.css';

function App() {
  return (
    <DataProvider>
      {/* <main className="grid md:grid-cols-desktop font-quicksand"> */}
        <Routing />
      {/* </main> */}
    </DataProvider>
  );
}

export default App;
