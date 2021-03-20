import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Color } from './Color/Color.jsx';
import './ColorList.scss';

const ColorList = ({colors = [], onRate=f=>f, onRemove=f=>f}) =>
  <div className="color-list">
    {
      (colors.length === 0) ?
        <p className="color-err">No Colors Listed. (Add a Color).</p> :
        colors.map(color => 
          <Color key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)}
          />
        )
    }
  </div>;

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
}


export { ColorList };