import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { Navbar } from './components/Navbar';
import AboutPage from './pages/AboutPage';
import GoodsPage from './pages/GoodsPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => navigate('/about'), []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/goods' element={<GoodsPage />}/>
        <Route path='*' element={<div>404 not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
