import React from 'react';
import { Route } from 'react-router-dom';
import { About, Contact, Events, Home, Products } from '../pages/pages.jsx';
import './MainContent.scss';


const MainContent = () => (
  <main className="main">
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/events" component={Events}/>
    <Route path="/products" component={Products}/>
    <Route path="/contact" component={Contact}/>
  </main>
);

export default MainContent;