import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common/reducer';
import placesReducer from './places/reducer';
import weatherReducer from './weather/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  places: placesReducer,
  weather: weatherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
