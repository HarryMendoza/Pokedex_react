import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css'
import Listado from './pages/listado';

function App() {
  return (
    <Router>
      <div className='bg-clr'>
        <Routes>
          <Route path="/" element={<Listado />} />
        </Routes>
      </div>

    </Router>

  );
}

export default App;
