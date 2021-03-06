import { v4 } from 'uuid';

const ADD_COLOR = 'ADD_COLOR';
const RATE_COLOR = 'RATE_COLOR';
const REMOVE_COLOR = 'REMOVE_COLOR';


let initialState = {
  colors: [
    {
      id: "43435-4654654-654-tt-dg-4-3543-65-46-54243-r",
      title: "ocean at dusk",
      color: "#00c4e2",
      rating: 5
    },
    {
      id: "6465-446-65765764-tt-dg-4-3543-65-46-54243-r",
      title: "lawn",
      color: "#26ac56",
      rating: 3
    },
    {
      id: "43435-4654654-654-tt-dg-4-3543-66-54243-454",
      title: "bright red",
      color: "#ff0000",
      rating: 0
    }
  ]
};

const colorReducer = (state={}, action) => {
  switch(action.type) {
    case ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        rating: 0
      }
    case RATE_COLOR:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          rating: action.rating
        }
    default:
      return state
  }
}

const colorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [colorReducer({}, action), ...state.colors]
      }
    case RATE_COLOR:
      return {
        ...state,
        colors: state.colors.map(color => colorReducer(color, action))
      }
    case REMOVE_COLOR:
      return {
        ...state,
        colors: state.colors.filter(color => color.id !== action.id)
      }
    default:
      return state
  }
};


export const addColor = (title,color) => ({
  type: ADD_COLOR,
  id: v4(),
  title,
  color,
  rating: 0
});

export const removeColor = (id) => ({
  type: REMOVE_COLOR,
  id
});

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating
})


export default colorsReducer;