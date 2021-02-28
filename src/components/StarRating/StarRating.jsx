import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StarRating.scss';
import { Star } from './Star/Star.jsx';


// class StarRating extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       starsSelected: 0
//     }

//     this.change = this.change.bind(this);
//   }

//   change(starsSelected){
//     this.setState({starsSelected})
//   }

//   render(){
//     const { totalStars } = this.props;
//     const { starsSelected } = this.state;

//     return (
//       <>
//         <div className="star-rating">
//         {[...Array(totalStars)].map((star, i) =>
//             <Star key={i}
//                   selected={i<starsSelected}
//                   onClick={() => this.change(i + 1)}/>
//         )}
//       </div>
//       <p className="start-text">{starsSelected} of {totalStars} stars</p>
//       </>
//     )
//   }
// }

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
  <>
    <div className="star-rating">
      {[...Array(totalStars)].map((star, i) => 
        <Star key={i}
              selected={i<starsSelected}
              onClick={() => onRate(i + 1)}/>
      )}
    </div>
    <p className="star-text">{starsSelected} of {totalStars} stars</p>
  </>

StarRating.propTypes = {
  totalStars: PropTypes.number
};



export { StarRating };