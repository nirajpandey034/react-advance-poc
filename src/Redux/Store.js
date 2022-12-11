import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import UserReducer from './User/UserReducer';

const rootReducer = combineReducers({ user: UserReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
