// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import crudReducer from './notes/crudreducer';

const rootReducer = combineReducers({
  cruds: crudReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
