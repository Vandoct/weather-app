import {
  WEATHER_CURRENT_BEGIN,
  WEATHER_CURRENT_ERROR,
  WEATHER_CURRENT_SUCCESS,
  WEATHER_FORECAST_BEGIN,
  WEATHER_FORECAST_ERROR,
  WEATHER_FORECAST_SUCCESS,
} from './types';

const initialState = {
  weather: {},
  forecasts: [],
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
    case WEATHER_FORECAST_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case WEATHER_FORECAST_SUCCESS: {
      return {
        ...state,
        forecasts: action.payload,
        isLoading: false,
      };
    }
    case WEATHER_FORECAST_ERROR: {
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
