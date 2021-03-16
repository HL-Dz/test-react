const SORT_COLORS = 'SORT_COLORS';

let initialState = {
  sort: 'SORTED_BY_DATE'
};


const sortReducer = (state=initialState, action) => {
  switch(action.type) {
    case SORT_COLORS:
      return {
        ...state,
        sort: action.sortBy
      }
    default:
      return state
  }
};

export default sortReducer;