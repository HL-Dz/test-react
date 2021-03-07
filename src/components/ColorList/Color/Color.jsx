import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../StarRating/StarRating.jsx';
import './Color.scss';

class Color extends Component {
  constructor(props){
    super(props);

    this.setTitleRef = element => this.titleRef = element;
  }

  componentWillMount(){
    this.style = {backgroundColor: '#ccc'}
  }

  shouldComponentUpdate(nextProps){
    const {rating} = this.props;
    return rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps){
    const {title, rating} = this.props;
    this.style = null;
    this.titleRef.style.backgroundColor = "#343d54";
    this.titleRef.style.color = "white";
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }

  componentDidUpdate(prevProps) {
    const {title,rating} = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    // this.titleRef.style.backgroundColor = "";
    // this.titleRef.style.color = "black";
    console.log(status);
  }

  render(){
    const {title, color, rating, onRemove, onRate} = this.props;

    return (
      <section className="color" style={this.style}>
        <h1 className="color__title" ref={this.setTitleRef}>{title}</h1>
        <button onClick={onRemove} className="color__remove">x</button>
        <div className="color-elem" style={{backgroundColor: color}}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
      </section>
    )
  }
}

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
}

export { Color };