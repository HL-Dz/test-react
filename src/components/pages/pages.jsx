import React from 'react';
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
      <h1 className="section__title">[About]</h1>
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