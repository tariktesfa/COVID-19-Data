import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import itemsReducer from './Data/CovidData';

const reducer = combineReducers({
  items: itemsReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
