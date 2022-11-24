import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { Navbar } from './components/Navbar';
import AboutPage from './pages/AboutPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => navigate('/about'), []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/goods' />
        <Route path='*' element={<div>404 not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
