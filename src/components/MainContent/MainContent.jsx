import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { About, Contact, Error404, Events, Home, Products } from '../pages/pages.jsx';
import './MainContent.scss';


const MainContent = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Redirect from="/history" to="/about/history" />
    <Redirect from="/services" to="/about/resvices" />
    <Redirect from="/location" to="/about/location" />
    <Route path="/events" component={Events}/>
    <Route path="/products" component={Products}/>
    <Route path="/contact" component={Contact}/>
    <Route component={Error404}/>
  </Switch>
);

export default MainContent;