import {connect} from 'react-redux';
import { rateColor, removeColor } from '../../redux/colorsReducer';
import { ColorList } from './ColorList.jsx';



export const ColorsContainer = connect(
  state => ({
    colors: state.colorsReducer.colors
  }),
  dispatch => ({
    onRemove(id){
      dispatch(removeColor(id))
    },
    onRate(id,rating){
      dispatch(rateColor(id,rating))
    }
  })
)(ColorList);