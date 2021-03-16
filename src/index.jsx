// import {store} from './redux/store.js';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import { App } from './components/App.jsx';
import { users, colors } from './data/data.js';


const { render } = ReactDOM;
console.log('Store: ', store.getState());

render(
  <App users={users}/>,
  document.getElementById('react-container')
)
