import React, {Component} from 'react';
import './StarRating.scss';
import { Star } from './Star/Star.jsx';


class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0
    }

    this.change = this.change.bind(this);
  }

  change(starsSelected){
    this.setState({starsSelected})
  }

  render(){
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <>
        <div className="star-rating">
        {[...Array(totalStars)].map((star, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => this.change(i + 1)}/>
        )}
      </div>
      <p className="start-text">{starsSelected} of {totalStars} stars</p>
      </>
    )
  }
}

// StarRating.propTypes = {
//   totalStars: PropTypes.number
// };

// StarRating.defaultProps = {
//   totalStars: 5
// };


export { StarRating };