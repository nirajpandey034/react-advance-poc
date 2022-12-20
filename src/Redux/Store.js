import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import UserReducer from './User/UserReducer';

const rootReducer = combineReducers({ user: UserReducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
