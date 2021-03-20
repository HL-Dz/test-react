import {connect} from 'react-redux';
import { addColor } from '../../redux/colorsReducer';
import { AddColorForm } from './AddColorForm.jsx';

export const AddColorContainer = connect(
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title,color))
    }
  })
)(AddColorForm);