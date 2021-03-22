import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Contact, Error404, Events, Home, Products } from '../pages/pages.jsx';
import './MainContent.scss';


const MainContent = () => (
  <main className="main">
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/events" component={Events}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Error404}/>
    </Switch>
  </main>
);

export default MainContent;