import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form';
import { searchReducer } from './search'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(combineReducers({ form: reducer, search: searchReducer }), composeWithDevTools());
