import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav className='navbar'>
    <NavLink  to='/about' >About page</NavLink>
    <NavLink  to='/goods'>Goods page</NavLink>
  </nav>
);
