import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import { App } from './components/App.jsx';
import { addColor, rateColor, removeColor} from './redux/colorsReducer';


const { render } = ReactDOM;

store.subscribe(() => {
  console.log(store.getState().colorsReducer.colors);
})

store.dispatch(addColor('red', '#fdfr54'));
store.dispatch(addColor('green', 'green'));

render(
  <App/>,
  document.getElementById('react-container')
)
