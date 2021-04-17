import {
  WEATHER_CURRENT_BEGIN,
  WEATHER_CURRENT_ERROR,
  WEATHER_CURRENT_SUCCESS,
} from './types';

const initialState = {
  weather: {},
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_CURRENT_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case WEATHER_CURRENT_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
        isLoading: false,
      };
    }
    case WEATHER_CURRENT_ERROR: {
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
