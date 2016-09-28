import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/index';
import initialState from './initialState';
import rootEpic from './epics/index';
//import rootEpic from './epics/loadItemsEpic';

const logger = createLogger({
  stateTransformer: state => {
    const game = state.get('game');
    return game && game.toJS();
  }
});

const epicMiddleware = createEpicMiddleware(rootEpic);

 const store = createStore(rootReducer, initialState,
 	applyMiddleware(epicMiddleware));
 
export default store;

// -- dev --

import { loadItems } from './actions/actions';
store.dispatch(loadItems());	
