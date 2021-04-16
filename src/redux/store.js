import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common/reducer';

const rootReducer = combineReducers({
  common: commonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
