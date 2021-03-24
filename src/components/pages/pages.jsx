import React from 'react';
import { Route } from 'react-router';
import { AboutMenu } from '../Navigation/AboutMenu.jsx';
import PageTemplate from '../PageTemplate/PageTemplate.jsx';
import './pages.scss';


export const Home = () => 
  <PageTemplate>
    <section className="home">
      <h1 className="section__title">[Home page]</h1>
    </section>
  </PageTemplate>

export const About = ({match}) =>
  <PageTemplate>
    <section className="about">
      <Route component={AboutMenu}/>
      <Route exact path="/about" component={Company}/>
      <Route path="/about/history" component={History}/>
      <Route path="/about/services" component={Services}/>
      <Route path="/about/location" component={Location}/>
    </section>
  </PageTemplate>

export const Events = () =>
  <PageTemplate>
    <section className="events">
      <h1 className="section__title">[Events]</h1>
    </section>
  </PageTemplate>

export const Products = () =>
  <PageTemplate>
    <section className="products">
      <h1 className="section__title">[Products]</h1>
      <p>Here will be some text</p>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section className="contact">
      <h1 className="section__title">[Contact]</h1>
    </section>
  </PageTemplate>

export const Error404 = ({location}) => 
  <PageTemplate>
    <div className="error404">
      <h1>Resource not found at  <span className="error404__elem">{location.pathname}</span></h1>
    </div>
  </PageTemplate>


// Section for About Component
const Company = () => 
  <section className="company">
    <h1 className="company__title">[Company]</h1>
  </section>;

const Services = () => 
  <section className="services">
    <h1 className="services__title">[Services]</h1>
  </section>;

const History = () => 
  <section className="history">
    <h1 className="history__title">[History]</h1>
  </section>;

const Location = () => 
  <section className="location">
    <h1 className="history__title">[Location]</h1>
  </section>;