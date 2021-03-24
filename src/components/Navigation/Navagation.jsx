import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const selectedStyle = {
  backgroundColor: '#fff',
  color: 'rgb(26, 26, 39)',
  fontWeight: 'bold'
}



const Navigation = ({}) =>
  <div className="navigation">
    <nav className="nav">
      <NavLink to="/" className="nav__link">Home</NavLink>
      <NavLink to="/about" className="nav__link" activeStyle={selectedStyle}>About</NavLink>
      <NavLink to="/events" className="nav__link" activeStyle={selectedStyle}>Events</NavLink>
      <NavLink to="/products" className="nav__link" activeStyle={selectedStyle}>Products</NavLink>
      <NavLink to="/contact" className="nav__link" activeStyle={selectedStyle}>Contact</NavLink>
    </nav>
  </div>

export {Navigation};