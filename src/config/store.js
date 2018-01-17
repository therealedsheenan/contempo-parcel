// @flow

import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// redux settings
import greetingReducer from '../redux/greeting/reducer';

const store = createStore(
  combineReducers({
    greetingReducer,
    routing: routerReducer
  }),
  compose(
    // applyMiddleware(epicMiddleWare),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
