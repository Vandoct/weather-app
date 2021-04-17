import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common/reducer';
import placesReducer from './places/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  places: placesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
