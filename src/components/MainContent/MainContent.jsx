import React from 'react';
import { Route } from 'react-router-dom';
import { About, Contact, Events, Home, Products } from '../pages/pages.jsx';
import './MainContent.scss';


const MainContent = () => (
  <main className="main">
    <Route path="/" exact component={Home}/>
    <Route path="/about" exact component={About}/>
    <Route path="/events" exact component={Events}/>
    <Route path="/products" exact component={Products}/>
    <Route path="/contact" exact component={Contact}/>
  </main>
);

export default MainContent;