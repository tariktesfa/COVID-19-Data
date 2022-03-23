import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataCovid from './Data/CovidData';

const rootReducer = combineReducers({
  dataCovid,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
