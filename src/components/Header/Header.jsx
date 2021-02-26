import React from 'react';
import './Header.scss';
import { Users } from '../Users/Users.jsx';


export const Header = ({title})=> (
  <header className="header">
    <h1 className="header__title">{title}</h1>
  </header>
)