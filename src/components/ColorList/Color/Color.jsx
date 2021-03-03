import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../StarRating/StarRating.jsx';
import './Color.scss';


const Color = ({title, color, rating = 0, onRemove=f=>f, onRate=f=>f}) =>
  <section className="color">
    <h1 className="color__title">{title}</h1>
    <button onClick={onRemove} className="color__remove">x</button>
    <div className="color-elem" style={{backgroundColor: color}}></div>
    <div>
      <StarRating starsSelected={rating} onRate={onRate}/>
    </div>
  </section>;

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
}

export { Color };