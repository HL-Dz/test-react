import {createStore,combineReducers} from 'redux';
import colorsReducer from './colorsReducer';
import sortReducer from './sortReducer';

let store = createStore(
  combineReducers({
    colorsReducer,
    sortReducer
  })
);

window.store = store;

export default store;