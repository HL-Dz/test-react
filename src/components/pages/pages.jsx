import React from 'react';
import './pages.scss';


export const Home = () => 
  <section className="home">
    <h1 className="section__title">[Home page]</h1>
  </section>;

export const About = () =>
  <section className="about">
    <h1 className="section__title">[About]</h1>
  </section>

export const Events = () =>
  <section className="events">
    <h1 className="section__title">[Events]</h1>
  </section>

export const Products = () =>
  <section className="products">
    <h1 className="section__title">[Products]</h1>
    <p>Here will be some text</p>
  </section>

export const Contact = () =>
  <section className="contact">
    <h1 className="section__title">[Contact]</h1>
  </section>

export const Error404 = ({location}) => 
  <div className="error404">
    <h1>Resource not found at  <span className="error404__elem">{location.pathname}</span></h1>
  </div>