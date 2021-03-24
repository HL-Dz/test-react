import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
  backgroundColor: '#fff',
  color: 'rgb(26, 26, 39)',
  fontWeight: 'bold'
};

export const AboutMenu = ({match}) => {
  const isExact = match.isExact ? selectedStyle : undefined;
  return (
    <ul className="about-menu">
      <li className="about-item">
        <NavLink to='/about' style={isExact} className="about__link">Company</NavLink>
      </li>
      <li className="about__item">
        <NavLink to='/about/history' activeStyle={selectedStyle} className="about__link">History</NavLink>
      </li>
      <li className="about__item">
        <NavLink to='/about/services' activeStyle={selectedStyle} className="about__link">Services</NavLink>
      </li>
      <li className="about__item">
        <NavLink to='/about/location' activeStyle={selectedStyle} className="about__link">Location</NavLink>
      </li>
    </ul>
  )
};