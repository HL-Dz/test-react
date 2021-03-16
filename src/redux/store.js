const C = {
  ADD_COLOR: 'ADD_COLOR',
  RATE_COLOR: 'RATE_COLOR',
  REMOVE_COLOR: 'REMOVE_COLOR',
  SORT_COLORS: 'SORT_COLORS'
}


export let store = {
  colors: [
    {
      "id": "43435-4654654-654-tt-dg-4-3543-65-46-54243-r",
      "title": "ocean at dusk",
      "color": "#00c4e2",
      "rating": "5"
    },
    {
      "id": "6465-446-65765764-tt-dg-4-3543-65-46-54243-r",
      "title": "lawn",
      "color": "#26ac56",
      "rating": "3"
    },
    {
      "id": "43435-4654654-654-tt-dg-4-3543-66-54243-454",
      "title": "bright red",
      "color": "#ff0000",
      "rating": "0"
    }
  ],
  sort: "SORT_BY_DATE"
};


const colorReducer = (state={}, action) => {
  switch(action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        raging: 0
      }
    case C.RATE_COLOR:
      return (state.id !== action.id) ? 
        state : 
        {
          ...state,
          rating: action.rating
        }
    default:
      return state
  }
};

const colorsReducer = (state=[], action) => {
  switch(action.type) {
    case C.ADD_COLOR:
      return [
        ...state,
        colorReducer({}, action)
      ]
    case C.RATE_COLOR:
      return state.map(color => colorReducer(color, action))
    case C.REMOVE_COLOR:
      return state.filter(color => color.id !== action.id);
    default:
      return state
  }
}

const sortReducer = (state='SORT_BY_DATE', action) => {
  switch(action.type) {
    case C.SORT_COLORS:
      return action.sortBy
    default:
      return state
  }
};