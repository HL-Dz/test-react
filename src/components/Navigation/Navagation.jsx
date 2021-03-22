import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';


const Navigation = () =>
  <div className="navigation">
    <nav className="nav">
      <Link to="/" className="nav__link">Home</Link>
      <Link to="about" className="nav__link">About</Link>
      <Link to="events" className="nav__link">Events</Link>
      <Link to="products" className="nav__link">Products</Link>
      <Link to="contact" className="nav__link">Contact</Link>
    </nav>
  </div>

export {Navigation};