import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: true,
  fetched: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {fetching: true}
    case FETCHED:
      return {...state, chars: action.payload, fetching: false}
    case ERROR:
      return { fetching: false, fetched: false, error: 'Error fetching chars'}
    default:
      return state;
  }
};
