import { PLACES_BEGIN, PLACES_ERROR, PLACES_SUCCESS } from './types';

const initialState = {
  places: [],
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACES_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PLACES_SUCCESS: {
      return {
        ...state,
        places: action.payload,
        isLoading: false,
      };
    }
    case PLACES_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
