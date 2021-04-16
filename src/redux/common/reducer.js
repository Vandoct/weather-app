import { TOKEN } from 'constants/key';
import { COMMON_BEGIN, COMMON_ERROR, COMMON_SUCCESS } from './types';

const initialState = {
  token: localStorage.getItem(TOKEN),
  isLoggedIn: localStorage.getItem(TOKEN) !== null,
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMON_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case COMMON_SUCCESS: {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        token: action.payload.token,
        isLoading: false,
      };
    }
    case COMMON_ERROR: {
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
