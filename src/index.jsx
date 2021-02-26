import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import { App } from './components/App.jsx';
import { users } from './data/data.js';


const { render } = ReactDOM;

render(
  <App users={users}/>,
  document.getElementById('react-container')
)
