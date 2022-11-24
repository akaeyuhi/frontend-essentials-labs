import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => navigate('/about'), []);
  return (
    <div className="container">
      <Routes>
        <Route path='/about' />
        <Route path='/goods' />
      </Routes>
    </div>
  );
}

export default App;
