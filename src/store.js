import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form';
import { searchReducer } from './search'

export const store = createStore(combineReducers({ form: reducer, search: searchReducer }));
