import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import { App } from './components/App.jsx';
import { users, colors } from './data/data.js';
import { addColor, rateColor, removeColor} from './redux/colorsReducer';


const { render } = ReactDOM;

store.subscribe(() => {
  console.log(store.getState().colorsReducer.colors);
})

store.dispatch(addColor('red', '#fdfr54'));
store.dispatch(rateColor("43435-4654654-654-tt-dg-4-3543-65-46-54243-r", 2));

render(
  <App users={users}/>,
  document.getElementById('react-container')
)
