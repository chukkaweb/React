
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import feedReducer from "./reducers/feedReducer";
import infographicsReducer from "./reducers/infographicsReducer";
import metaDataReducer from "./reducers/metaDataReducer";
import trendingReducer from "./reducers/trendingReducer";
import sharedReducer from "./reducers/sharedReducer";

const rootReducer = combineReducers({
    feedRdc: feedReducer, 
    infographicsRdc: infographicsReducer,
    metaDataRdc: metaDataReducer, 
    trendingRdc: trendingReducer,
    sharedRdc: sharedReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
  });

export default store;
