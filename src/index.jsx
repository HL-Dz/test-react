import store from './redux/redux-store';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import { App } from './components/App.jsx';
import { addColor, rateColor, removeColor} from './redux/colorsReducer';


const { render } = ReactDOM;
console.log(store.getState());
store.subscribe(() =>
  console.log(store.getState().colorsReducer.colors)
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('react-container')
)
