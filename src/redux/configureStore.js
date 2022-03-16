import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import DataReducer from './Data/CovidData';

const reducer = combineReducers({
  items: DataReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
