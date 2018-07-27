/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import catalog from './catalog';
import home from './home';
import userInfo from './userInfo';
import workOrder from './workOrder';

const reducers = {
  catalog,
  home,
  userInfo,
  workOrder,
  router
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
