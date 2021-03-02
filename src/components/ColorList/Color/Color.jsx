import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../StarRating/StarRating.jsx';
import './Color.scss';


const Color = ({title, color, rating = 0}) =>
  <section className="color">
    <h1 className="color__title">{title}</h1>
    <div className="color-elem" styl={{backgroundColor: color}}></div>
    <div>
      <StarRating starsSelected={rating}/>
    </div>
  </section>;

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
}

export { Color };